// Copyright 2017 Google Inc. All Rights Reserved.
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

// Given:
//   limit = new ConcurrencyLimit(5);
//   ...
//   limit.whenReady(() => makePromise()).then(x)
//
// makePromise() will be called at most 5 times in parallel (per
// ConcurrencyLimit instance), and the result of whenReady() is a promise that
// resolves the same way as makePromise().
class ConcurrencyLimit {
  constructor(limit) {
    this._remaining = limit;
    this._pending = [];
  }

  whenReady(fn) {
    let work = () => {
      let finish = () => {
        if (this._pending.length > 0) {
          let next = this._pending.shift();
          next();
        } else {
          this._remaining++;
        }
      };
      let result = fn();
      result.then(finish, finish);
      return result;
    };

    if (this._remaining > 0) {
      this._remaining--;
      return work();
    } else {
      return new Promise(resolve => {
        this._pending.push(() => resolve(work()));
      });
    }
  }
}

exports.ConcurrencyLimit = ConcurrencyLimit;
