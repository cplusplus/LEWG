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

let request = require('request').defaults({
  jar: true,
  headers: {
    'User-Agent': 'C++ LEWG wiki setup'
  }
});
let url = require('url');
let assert = require('assert');
let keytar = require('keytar');
let read = require('read');
let cheerio = require('cheerio');
let progress = require('./progress');
let ConcurrencyLimit = require('./concurrencyLimit').ConcurrencyLimit;

let requestLimit = new ConcurrencyLimit(2);

let username = 'wg21';

function pRequest(options) {
  return requestLimit.whenReady(() =>
      new Promise(function(resolve, reject) {
        request(options, function(error, response, body) {
          if (error) reject(error);
          else resolve({response: response, body: body});
        });
      }));
};

function loadHTML(options) {
  return progress.item(
      'Loading ' + url.format(options.url),
      pRequest(options).then(function(result) {
        if (result.response.statusCode !== 200) {
          throw new Error('Non-200 result fetching ' + url.format(options.url) + ':\n' + result.body);
        }
        return cheerio.load(result.body);
      }));
};

function formFields($form) {
  let result = {};
  for (let field of $form.serializeArray()) {
    result[field.name] = field.value;
  }
  return result;
};

module.exports = function(meetingRoot) {
  function makeUrl(script, page) {
    return url.parse("http://wiki.edg.com/twiki/bin/" + script + "/" + meetingRoot + "/" + page,
                     /*parseQueryString=*/true);
  };

  function login() {
    let password = keytar.getPassword('wiki.edg.com', username);
    let passwordP;
    if (password === null) {
      passwordP = new Promise(function(resolve, reject) {
        read({prompt: 'wiki.edg.com password:', silent: true}, function(error, result) {
          if (error) reject(error);
          else resolve(result);
        });
      }).then(function(password) {
        if (keytar.addPassword('wiki.edg.com', username, password)) {
          return password;
        } else {
          throw new Error('Could not add password for ' + username + '@wiki.edg.com');
        }
      });
    } else {
      passwordP = Promise.resolve(password);
    }
    let logonUrl = makeUrl('logon', '');
    return Promise.all([loadHTML({url: logonUrl}), passwordP]).then(function(arr) {
      let $ = arr[0];
      let password = arr[1];
      let $form = $('form[name=loginform]');
      let fields = formFields($form);
      fields.username = username;
      fields.password = password;
      return pRequest({
        method: "POST",
        url: url.resolve(logonUrl, $form.attr('action')),
        form: fields,
      });
    });
  };

  function writePage(options) {
    let name = options.name;
    let overwriteExisting = options.overwriteExisting;
    let content = options.content;
    let parent = options.parent;
    let dryrun = options.dryrun;

    let editUrl = makeUrl('edit', name)
    editUrl.query.nowysiwyg = 1;
    editUrl.query.t = Date.now();
    return loadHTML({url: editUrl}).then(function($) {
      let $form = $('form[name=main]');
      let fields = formFields($form);
      if (fields.newtopic) {
        fields.topicparent = parent;
      } else if (!overwriteExisting) {
        console.warn(name + ' already exists; skipping');
        return;
      }
      if (!overwriteExisting) {
        fields.onlynewtopic = 1;
      }
      fields.text = content;
      fields.forcenewrevision = 1;
      if (dryrun) {
        return JSON.stringify(fields);
      } else {
        console.log('Writing ' + name);
        return pRequest({
          method: "POST",
          url: url.resolve(editUrl, $form.attr('action')),
          form: fields,
        });
      }
    });
  };

  return {
    login:login,
    writePage: writePage,
  };
};
