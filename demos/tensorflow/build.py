import re
from pprint import pprint

BLOCK_TAG_FORMAT = '      <block type="%s"></block>\n'
GENERATOR_REG = '(Blockly.JavaScript\[[\'\"]tensorflow_\w+[\'\"]\])+'


def build_demo_page():
  content = ''
  with open('../../generators/javascript/tensorflow.js') as f:
    for line in f.readlines():
      content += line
  res = re.findall(GENERATOR_REG, content)
  res = [x[20: -2] for x in res]
  print('Load blocks from "generators/javascript/tensorflow.js:"')
  pprint(res)
  tensorflow_blocks_content = ''
  for block_name in res:
    tensorflow_blocks_content += BLOCK_TAG_FORMAT % block_name

  template_content = ''
  with open('index.tpl') as f:
    for line in f.readlines():
      template_content += line
  output_content = template_content.replace(
    '{{ tensorflow_blocks }}', tensorflow_blocks_content)
  with open('index.html', mode='w') as output_file:
    output_file.write(output_content)
  print('Finished building tensorflow demo page.')


if __name__ == '__main__':
  build_demo_page()
