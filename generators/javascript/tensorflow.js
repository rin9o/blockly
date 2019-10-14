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
 * @fileoverview Generating JavaScript for TensorFlow blocks
 * @author rin9ofeng@gmail.com (Ringo Feng)
 */
'use strict';

goog.provide('Blockly.JavaScript.tensorflow');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['tensorflow_tensor'] = function(block) {
  // Create a 2D tensor
  let values = Blockly.JavaScript.valueToCode(
    block, 'VALUES', Blockly.JavaScript.ORDER_COMMA
  ) || 'null';
  let shape = Blockly.JavaScript.valueToCode(
    block, 'SHAPE', Blockly.JavaScript.ORDER_COMMA
  ) || 'null';
  const code = `tf.tensor2d(${values}, ${shape})`;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
