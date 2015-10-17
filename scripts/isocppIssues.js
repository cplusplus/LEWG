// Copyright 2015 Google Inc. All Rights Reserved.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

var jsonrpc = require('jayson');
var client = jsonrpc.client.https('https://issues.isocpp.org/jsonrpc.cgi');


function pRequest(method, argument) {
  return new Promise(function(resolve, reject) {
    client.request(
      method, [argument],
      function(err, error, result) {
        if (err) reject(err);
        else resolve(result);
      });
  });
};

// https://www.bugzilla.org/docs/4.4/en/html/api/Bugzilla/WebService/Bug.html#search
function searchBugs(filter) {
  return pRequest('Bug.search', filter);
};

function lewgPlate() {
  return searchBugs({
    component: 'Library',
    status: ['NEEDS_DISCUSSION', 'DESIGN_REVIEW'],
  }).then(function(result) {
    return result.bugs.filter(function(bug) {
      if (bug.keywords.includes('postponed')) return false;
      if (bug.keywords.includes('needs_updated_proposal')) return false;
      return true;
    });
  });
}

// Takes a single bug ID and returns that bug's comments.
// https://www.bugzilla.org/docs/4.4/en/html/api/Bugzilla/WebService/Bug.html#comments
function getComments(bugId) {
  return pRequest('Bug.comments', {ids: [bugId]})
    .then(function(result) { return result.bugs[bugId].comments;});
};

// Maps user login names to {promise, resolve, reject}, where the
// promise resolves to the user struct described in
// https://www.bugzilla.org/docs/4.4/en/html/api/Bugzilla/WebService/User.html#get.
var knownUsers = new Map();
// Given a list of login names, returns a matching list of real names.
function getUserRealNames(loginNames) {
  var queriedUsers = loginNames.filter(function(name) {
    return !knownUsers.has(name);
  });
  queriedUsers.forEach(function(name) {
    var resolver = {};
    resolver.promise = new Promise(function(resolve, reject) {
      resolver.resolve = resolve;
      resolver.reject = reject;
    });
    knownUsers.set(name, resolver);
  });
  if (queriedUsers.length > 0) {
    pRequest('User.get', {
      names: queriedUsers
    }).then(function(result) {
      result.users.forEach(function(user) {
        knownUsers.get(user.name).resolve(user);
      });
    });
  }

  return Promise.all(loginNames.map(function(name) {
    return knownUsers.get(name).promise.then(function(user) { return user.real_name; });
  }));
}

exports.client = client;
exports.lewgPlate = lewgPlate;
exports.getComments = getComments;
exports.getUserRealNames = getUserRealNames;
