/**
 * @license
 * TensorBlockly
 *
 * Copyright 2019 Ringo Feng
 * https://github.com/rin9o
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview TensorFlow helper blocks for Blockly
 * @author rin9ofeng@gmail.com (Ringo Feng)
 */
'use strict';

goog.provide('Blockly.Blocks.tensorflow_helper');

goog.require('Blockly.Blocks');
goog.require('Blockly');

/// Block for creating array from JSON easily
const block_create_array_from_json = {
  "type": "tf_helper_create_array_from_json",
  "message0": "%{BKY_TF_HELPER_CREATE_ARRAY_FROM_JSON_TITLE}",
  "args0": [{
    "type": "field_input",
    "name": "TEXT",
    "text": "[1, 2, 3]",
    "check": "String"
  }],
  "output": "Array",
  "style": "list_blocks",
  "helpUrl": "",
  "extensions": [
    "text_quotes"
  ]
};

Blockly.defineBlocksWithJsonArray([
  block_create_array_from_json
]);
