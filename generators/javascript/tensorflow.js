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
const createSimpleGeneratorFunc = (code) => function(block) {
  let args = code.match(/(~\w*~)+/g);
  if (args instanceof String) {
    args = [args];
  } else if (!(args instanceof Array)) {
    args = [];
  }
  let generatedCode = code;
  for (let i = 0; i < args.length; i++) {
    let arg = args[i];
    const argKey = arg.replace(/~/g, '');
    generatedCode = generatedCode.replace(arg, valueToCode(block, argKey) || 'null');
  }
  return returnCode(generatedCode);
};

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

Blockly.JavaScript['tensorflow_complex'] = function(block) {
  let real = valueToCode(block, 'REAL');
  let imag = valueToCode(block, 'IMAG');
  return returnCode(`tf.complex(${real}, ${imag})`);
};

Blockly.JavaScript['tensorflow_eye'] = function(block) {
  let numRows = valueToCode(block, 'NUM_ROWS');
  let numColumns = valueToCode(block, 'NUM_COLUMNS');
  return returnCode(`tf.eye(${numRows}, ${numColumns}`);
};

Blockly.JavaScript['tensorflow_fill'] = function(block) {
  let shape = valueToCode(block, 'SHAPE');
  let value = valueToCode(block, 'VALUE');
  return returnCode(`tf.fill(${shape}, ${value})`);
};

Blockly.JavaScript['tensorflow_imag'] = createSimpleGeneratorFunc(
  'tf.imag(~SOURCE~)'
);

Blockly.JavaScript['tensorflow_linspace'] = createSimpleGeneratorFunc(
  'tf.linspace(~START~, ~STOP~, ~NUM~)'
);

Blockly.JavaScript['tensorflow_oneHot'] = createSimpleGeneratorFunc(
  'tf.oneHot(~INDICES~, ~DEPTH~)'
);

Blockly.JavaScript['tensorflow_ones'] = createSimpleGeneratorFunc(
  'tf.ones(~SHAPE~)'
);

Blockly.JavaScript['tensorflow_onesLike'] = createSimpleGeneratorFunc(
  'tf.onesLike(~SHAPE~)'
);

Blockly.JavaScript['tensorflow_print'] = createSimpleGeneratorFunc(
  '~SOURCE~.print()'
);

Blockly.JavaScript['tensorflow_range'] = createSimpleGeneratorFunc(
  'tf.range(~START~, ~STOP~, ~STEP~)'
);

Blockly.JavaScript['tensorflow_real'] = createSimpleGeneratorFunc(
  'tf.real(~SOURCE~)'
);

Blockly.JavaScript['tensorflow_truncatedNormal'] = createSimpleGeneratorFunc(
  'tf.truncatedNormal(~SHAPE~)'
);

Blockly.JavaScript['tensorflow_variable'] = createSimpleGeneratorFunc(
  'tf.variable(~INITIAL_VALUE~, ~TRAINABLE~, ~NAME~)'
);

Blockly.JavaScript['tensorflow_zeros'] = createSimpleGeneratorFunc(
  'tf.zeros(~SHAPE~)'
);

Blockly.JavaScript['tensorflow_zerosLike'] = createSimpleGeneratorFunc(
  'tf.zerosLike(~SOURCE~)'
);

Blockly.JavaScript['tensorflow_tensor_flatten'] = createSimpleGeneratorFunc(
  '~SOURCE~.flatten()'
);

Blockly.JavaScript['tensorflow_tensor_clone'] = createSimpleGeneratorFunc(
  '~SOURCE~.clone()'
);

Blockly.JavaScript['tensorflow_variable_assign'] = createSimpleGeneratorFunc(
  '~SOURCE~.assign(~NEW_VALUE~)'
);

Blockly.JavaScript['tensorflow_concat'] = createSimpleGeneratorFunc(
  'tf.concat(~TENSORS~)'
);

Blockly.JavaScript['tensorflow_concat_two'] = createSimpleGeneratorFunc(
  'tf.concat([~FIRST~, ~SECOND~])'
);

Blockly.JavaScript['tensorflow_gather'] = createSimpleGeneratorFunc(
  '~SOURCE~.gather(~INDICES~)'
);

Blockly.JavaScript['tensorflow_reverse'] = createSimpleGeneratorFunc(
  '~SOURCE~.reverse()'
);

Blockly.JavaScript['tensorflow_slice'] = createSimpleGeneratorFunc(
  '~SOURCE~.slice(~BEGIN~, ~SIZE~)'
);

Blockly.JavaScript['tensorflow_split'] = createSimpleGeneratorFunc(
  '~SOURCE~.split(~NUM_OR_SIZE_SPLITS~)'
);

Blockly.JavaScript['tensorflow_stack'] = createSimpleGeneratorFunc(
  'tf.stack(~TENSORS~)'
);

Blockly.JavaScript['tensorflow_tile'] = createSimpleGeneratorFunc(
  '~SOURCE~.tile(~REPS~)'
);

Blockly.JavaScript['tensorflow_unstack'] = createSimpleGeneratorFunc(
  'tf.unstack(~SOURCE~)'
);

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
