/**
 * @license Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/** @type {LH.Config.Json} */
const cogPerfConfig = {
  extends: 'lighthouse:default',
  settings: {
    /** Available flags and their values are present in externs.d.ts */
    emulatedFormFactor: 'none',
    onlyAudits: [
      'performance-budget',
      'first-contentful-paint',
      'first-meaningful-paint',
      'interactive',
      'speed-index',
    ],
    throttlingMethod: 'provided',
    /** Description of budgets can be found ..\types\budget.d.ts */
    budgets: [{
      "resourceSizes": [
        {
          "resourceType": "script",
          "budget": 125
        },
        {
          "resourceType": "image",
          "budget": 300
        },
        {
          "resourceType": "total",
          "budget": 3000
        }
      ],
      /** This metrics are ignored currently in HTML report
      https://github.com/GoogleChrome/lighthouse/issues/8917#issuecomment-491326444
      "timings": [
        {
          "metric": "interactive",
          "budget": 500,
          "tolerance": 100
        },
        {
          "metric": "first-meaningful-paint",
          "budget": 200
        },
        {
          "metric": "first-contentful-paint",
          "budget": 100
        }
      ] */
    }],
  },
};

module.exports = cogPerfConfig;
