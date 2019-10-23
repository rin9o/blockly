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

// Create helpers
function titleRes(methodName) {
  return `%{BKY_TENSORFLOW_${methodName}_TITLE`;
}
function tooltipRes(methodName) {
  return `%{BKY_TENSORFLOW_${methodName}_TOOLTIP`;
}
function createTensorSourceArg(receiveArray) {
  let checkTypes = "TfTensor";
  if (receiveArray) {
    checkTypes = ["TfTensor", "Array"];
  }
  return {
    "type": "input_value",
    "name": "SOURCE",
    "check": checkTypes
  };
}
const DATA_HUE = "%{BKY_TENSORFLOW_DATA_HUE}";

// Tensors
/// Block for create tensor
const tf_tensor = {
  "type": "tensorflow_tensor",
  "message0": titleRes('TENSOR'),
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
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('TENSOR'),
  "extensions": ["parent_tooltip_when_inline"]
};
/// Block for create scalar
const tf_scalar = {
  "type": "tensorflow_scalar",
  "message0": titleRes('SCALAR'),
  "args0": [{
    "type": "input_value",
    "name": "VALUE",
    "check": ["Number", "Boolean", "String", "Array"],
    "align": "RIGHT"
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('SCALAR')
};
/// Block for complex tensor
const tf_complex = {
  "type": "tensorflow_complex",
  "message0": titleRes('COMPLEX'),
  "args0": [{
    "type": "input_value",
    "name": "REAL",
    "check": ["TfTensor", "Array"]
  }, {
    "type": "input_value",
    "name": "IMAG",
    "check": ["TfTensor", "Array"]
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('COMPLEX')
};
/// Block for create eye tensor
const tf_eye = {
  "type": "tensorflow_eye",
  "message0": titleRes('EYE'),
  "args0": [{
    "type": "input_value",
    "name": "NUM_ROWS",
    "check": "Number"
  }, {
    "type": "input_value",
    "name": "NUM_COLUMNS",
    "check": "Number"
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('EYE')
};
/// Block for create tensor filled with a scalar value
const tf_fill = {
  "type": "tensorflow_fill",
  "message0": titleRes('FILL'),
  "args0": [{
    "type": "input_value",
    "name": "SHAPE",
    "check": "Array"
  }, {
    "type": "input_value",
    "name": "VALUE",
    "check": ["Number", "Array"]
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('FILL')
};
/// Block for returning the imaginary part of a complex/real tensor
const tf_imag = {
  "type": "tensorflow_imag",
  "message0": titleRes('IMAG'),
  "args0": [createTensorSourceArg(true)],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('IMAG')
};
/// Block for linspace function
const tf_linspace = {
  "type": "tensorflow_linspace",
  "message0": titleRes('LINSPACE'),
  "args0": [{
    "type": "input_value",
    "name": "START",
    "check": "Number"
  }, {
    "type": "input_value",
    "name": "STOP",
    "check": "Number"
  }, {
    "type": "input_value",
    "name": "NUM",
    "check": "Number"
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('LINSPACE')
};
/// Block for create one-hot tensor
const tf_oneHot = {
  "type": "tensorflow_oneHot",
  "message0": titleRes('ONE_HOT'),
  "args0": [{
    "type": "input_value",
    "name": "INDICES",
    "check": ["TfTensor", "Array"]
  }, {
    "type": "input_value",
    "name": "DEPTH",
    "check": "Number"
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('ONE_HOT')
};
/// Block for create tensor with all elements set to 1
const tf_ones = {
  "type": "tensorflow_ones",
  "message0": titleRes('ONES'),
  "args0": [{
    "type": "input_value",
    "name": "SHAPE",
    "check": "Array"
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('ONES')
};
/// Block for onesLike
const tf_onesLike = {
  "type": "tensorflow_onesLike",
  "message0": titleRes('ONES_LIKE'),
  "args0": [createTensorSourceArg(true)],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('ONES_LIKE')
};
/// Block for print
const tf_print = {
  "type": "tensorflow_print",
  "message0": titleRes('PRINT'),
  "args0": [createTensorSourceArg()],
  "output": null,
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('PRINT')
};
/// Block for tf.range
const tf_range = {
  "type": "tensorflow_range",
  "message0": titleRes('RANGE'),
  "args0": [{
    "type": "input_value",
    "name": "START",
    "check": "Number"
  }, {
    "type": "input_value",
    "name": "STOP",
    "check": "Number"
  }, {
    "type": "input_value",
    "name": "STEP",
    "check": "Number"
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('RANGE')
};
/// Block for returning the real part of a complex/real tensor
const tf_real = {
  "type": "tensorflow_real",
  "message0": titleRes('REAL'),
  "args0": [createTensorSourceArg(true)],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('REAL')
};
/// Block for truncated normal
const tf_truncatedNormal = {
  "type": "tensorflow_truncatedNormal",
  "message0": titleRes('TRUNCATED_NORMAL'),
  "args0": [{
    "type": "input_value",
    "name": "SHAPE",
    "check": "Array"
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('TRUNCATED_NORMAL')
};
/// Block for create a new variable
const tf_variable = {
  "type": "tensorflow_variable",
  "message0": titleRes('VARIABLE'),
  "args0": [{
    "type": "input_value",
    "name": "INITIAL_VALUE",
    "check": "TfTensor"
  }, {
    "type": "input_value",
    "name": "TRAINABLE",
    "check": "Boolean"
  }, {
    "type": "input_value",
    "name": "NAME",
    "check": "String"
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('VARIABLE')
};
/// Block for create zero tensor
const tf_zeros = {
  "type": "tensorflow_zeros",
  "message0": titleRes('ZEROS'),
  "args0": [{
    "type": "input_value",
    "name": "VALUE",
    "check": "Array"
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('ZEROS')
};
/// Block for create zero tensor with same shape as the given tensor
const tf_zerosLike = {
  "type": "tensorflow_zerosLike",
  "message0": titleRes('ZEROS_LIKE'),
  "args0": [createTensorSourceArg(true)],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('ZEROS_LIKE')
};
// Tensors - Methods for tf.Tensor class
/// tensor.flatten()
const tf_tensor_flatten = {
  "type": "tensorflow_tensor_flatten",
  "message0": titleRes('TENSOR_FLATTEN'),
  "args0": [createTensorSourceArg()],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('TENSOR_FLATTEN')
};
/// tensor.asScalar()
const tf_tensor_asScalar = {
  "type": "tensorflow_tensor_asScalar",
  "message0": titleRes('TENSOR_AS_SCALAR'),
  "args0": [createTensorSourceArg()],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('TENSOR_AS_SCALAR')
};
/// tensor.clone()
const tf_tensor_clone = {
  "type": "tensorflow_tensor_clone",
  "message0": titleRes('TENSOR_CLONE'),
  "args0": [createTensorSourceArg()],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('TENSOR_CLONE')
};
/// tensor(variable).assign()
const tf_variable_assign = {
  "type": "tensorflow_variable_assign",
  "message0": titleRes('VARIABLE_ASSIGN'),
  "args0": [createTensorSourceArg()],
  "output": null,
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('VARIABLE_ASSIGN')
};
// Tensors - Slicing and Joining
/// Block for tf.concat(tensors, axis?)
const tf_concat = {
  "type": "tensorflow_concat",
  "message0": titleRes('CONCAT'),
  "args0": [{
    "type": "input_value",
    "name": "TENSORS",
    "check": "Array"
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('CONCAT')
};
/// Block for tf.concat([first, second])
const tf_concat_two = {
  "type": "tensorflow_concat_two",
  "message0": titleRes('CONCAT_TWO'),
  "args0": [{
    "type": "input_value",
    "name": "FIRST",
    "check": "TfTensor"
  }, {
    "type": "input_value",
    "name": "SECOND",
    "check": "TfTensor"
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('CONCAT_TWO')
};
/// Block for tf.gather(x, indices, axis?)
const tf_gather = {
  "type": "tensorflow_gather",
  "message0": titleRes('GATHER'),
  "args0": [createTensorSourceArg(), {
    "type": "input_value",
    "name": "INDICES",
    "check": ["TfTensor", "Array"]
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('GATHER')
};
/// Block for tf.reverse(x)
const tf_reverse = {
  "type": "tensorflow_reverse",
  "message0": titleRes('REVERSE'),
  "args0": [createTensorSourceArg(true)],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('REVERSE')
};
/// Block for tf.slice(x, begin, size?)
const tf_slice = {
  "type": "tensorflow_slice",
  "message0": titleRes('SLICE'),
  "args0": [createTensorSourceArg(true), {
    "type": "input_value",
    "name": "BEGIN",
    "check": ["Number", "Array"]
  }, {
    "type": "input_value",
    "name": "SIZE",
    "check": ["Number", "Array"]
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('SLICE')
};
/// Block for tf.split(x, numOrSizeSplits, axis?)
const tf_split = {
  "type": "tensorflow_split",
  "message0": titleRes('SPLIT'),
  "args0": [createTensorSourceArg(true), {
    "type": "input_value",
    "name": "NUM_OR_SIZE_SPLITS",
    "check": ["Number", "Array"]
  }],
  "output": "Array",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('SPLIT')
};
/// Block for tf.stack(tensors, axis?)
const tf_stack = {
  "type": "tensorflow_stack",
  "message0": titleRes('STACK'),
  "args0": [{
    "type": "input_value",
    "name": "TENSORS",
    "check": "Array"
  }],
  "output": "Array",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('STACK')
};
/// Block for tf.tile(x, reps)
const tf_tile = {
  "type": "tensorflow_tile",
  "message0": titleRes('TILE'),
  "args0": [createTensorSourceArg(true), {
    "type": "input_value",
    "name": "REPS",
    "check": "Array"
  }],
  "output": "TfTensor",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('TILE')
};
/// Block for tf.unstack(x, axis?)
const tf_unstack = {
  "type": "tensorflow_unstack",
  "message0": titleRes('UNSTACK'),
  "args0": [createTensorSourceArg(true)],
  "output": "Array",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('UNSTACK')
};

// Models
/// Block for create sequential
const tf_sequential = {
  "type": "tensorflow_sequential",
  "message0": titleRes('SEQUENTIAL'),
  "args0": [],
  "output": "TfModel",
  "colour": DATA_HUE,
  "helpUrl": "",
  "tooltip": tooltipRes('SEQUENTIAL'),
  "extensions": ["parent_tooltip_when_inline"]
};

// Layers

// Operations

// Training

// Performance

// Environment

// Constraints

// Initializers

// Regularizers

// Data

// Visualization (tfjs-vis)

// Util

// Backends

// Browser

// Metrics

// Callbacks

Blockly.defineBlocksWithJsonArray([
  tf_scalar,
  tf_tensor,
  tf_concat,
  tf_concat_two,
  tf_eye,
  tf_fill,
  tf_gather,
  tf_imag,
  tf_linspace,
  tf_oneHot,
  tf_ones,
  tf_onesLike,
  tf_print,
  tf_range,
  tf_real,
  tf_reverse,
  tf_slice,
  tf_split,
  tf_truncatedNormal,
  tf_tile,
  tf_variable,
  tf_variable_assign,
  tf_stack,
  tf_unstack,
  tf_zeros,
  tf_zerosLike,
  tf_tensor_asScalar,
  tf_tensor_clone,
  tf_tensor_flatten,
  tf_complex,
  tf_sequential,
]);
