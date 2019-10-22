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

/*
 * Helper methods
 */
const valueToCode = (block, argName) =>
  Blockly.JavaScript.valueToCode(block, argName, Blockly.JavaScript.ORDER_COMMA);
const returnCode = (code) =>
  [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];

/*
 * Tensors
 */

Blockly.JavaScript['tensorflow_scalar'] = function(block) {
  // Create scalar model
  let value = valueToCode(block, 'VALUE') || 'null';
  return returnCode(`tf.scalar(${value})`);
};

Blockly.JavaScript['tensorflow_tensor'] = function(block) {
  // Create a 2D tensor
  let values = valueToCode(block, 'VALUES') || 'null';
  let shape = valueToCode(block, 'SHAPE') || 'null';
  return returnCode(`tf.tensor2d(${values}, ${shape})`);
};

Blockly.JavaScript['tensorflow_clone'] = function(block) {
  let src = valueToCode(block, 'SOURCE') || 'null';
  return returnCode(`${src}.clone()`);
};

Blockly.JavaScript['tensorflow_complex'] = function(block) {
  let real = valueToCode(block, 'REAL') || 'null';
  let imag = valueToCode(block, 'IMAG') || 'null';
  return returnCode(`tf.complex(${real}, ${imag})`);
};

/*
 * Models
 */

Blockly.JavaScript['tensorflow_sequential'] = function(block) {
  // Create a sequential
  return returnCode(`tf.sequential()`);
};
