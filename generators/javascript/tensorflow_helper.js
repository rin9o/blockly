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
 * @fileoverview Generating JavaScript for TensorFlow helper blocks
 * @author rin9ofeng@gmail.com (Ringo Feng)
 */
'use strict';

goog.provide('Blockly.JavaScript.tensorflow_helper');

goog.require('Blockly.JavaScript');

/*
 * Helper methods
 */
const tf_helper_utils = function(){};
tf_helper_utils.valueToCode = (block, argName) =>
  Blockly.JavaScript.valueToCode(block, argName, Blockly.JavaScript.ORDER_COMMA);
tf_helper_utils.returnCode = (code) =>
  [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
tf_helper_utils.createSimpleGeneratorFunc = (code) => function(block) {
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
    generatedCode = generatedCode.replace(arg, tf_helper_utils.valueToCode(block, argKey) || 'null');
  }
  return tf_helper_utils.returnCode(generatedCode);
};

Blockly.JavaScript['tf_helper_create_array_from_json'] = tf_helper_utils.createSimpleGeneratorFunc(
  'JSON.parse(~TEXT~)'
);
