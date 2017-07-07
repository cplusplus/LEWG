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

// This program lists who's assigned LEWG issues, which lets us email them and
// make sure they're coming to the meeting.

"use strict";

require('array.prototype.includes');
let isocppIssues = require('./isocppIssues');
let assert = require('assert');

function elaborateIssue(issue) {
  let ccNamesP = isocppIssues.getUserRealNames(issue.cc);
  let presenterNameP;
  if (issue.assigned_to === 'lib-ext@lists.isocpp.org') {
    presenterNameP = Promise.resolve(undefined);
  } else {
    presenterNameP = isocppIssues.getUserRealNames([issue.assigned_to]);
  }
  return Promise.all([ccNamesP, presenterNameP])
    .then(function(arr) {
      issue.ccNames = arr[0];
      issue.presenterName = arr[1];
      return issue;
    });
};

isocppIssues.lewgPlate().then(function(issues) {
  return Promise.all(issues.map(elaborateIssue));
}).then(function(issues) {
  let presenters = new Set();
  for (let issue of issues) {
    if (issue.presenterName === undefined) {
      console.warn(`No presenter for LEWG${issue.id}`);
    } else {
      presenters.add(`${issue.presenterName} <${issue.assigned_to}>,`);
    }
  }
  for (let presenter of Array.from(presenters).sort()) {
    console.log(presenter);
  }
}).catch(function(err) { console.error(err.stack || err); });
