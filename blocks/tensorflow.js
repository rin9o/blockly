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
 * @fileoverview TensorFlow blocks for Blockly
 * @author rin9ofeng@gmail.com (Ringo Feng)
 */
'use strict';

goog.provide('Blockly.Blocks.tensorflow');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([
  // Block for create tensor.
  {
    "type": "tensorflow_tensor",
    "message0": "%{BKY_TENSORFLOW_TENSOR_TITLE}",
    "args0": [{
      "type": "input_value",
      "name": "VALUES",
      "check": "Array",
      "align": "RIGHT"
    }, {
      "type": "input_value",
      "name": "SHAPE",
      "check": "Array",
      "align": "RIGHT"
    }],
    "output": "TfTensor",
    "colour": "%{BKY_TENSORFLOW_DATA_HUE}",
    "helpUrl": "%{BKY_TENSORFLOW_TENSOR_HELPURL}",
    "tooltip": "%{BKY_TENSORFLOW_TENSOR_TOOLTIP}",
    "extensions": ["parent_tooltip_when_inline"]
  }
]);
