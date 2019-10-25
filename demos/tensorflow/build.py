import re
from pprint import pprint

BLOCK_TAG_FORMAT = '      <block type="%s"></block>\n'
TF_BLOCK_REG = '(Blockly.JavaScript\[[\'\"]tensorflow_\w+[\'\"]\])+'
TF_HELPER_BLOCK_REG = '(Blockly.JavaScript\[[\'\"]tf_helper_\w+[\'\"]\])+'

blocks_rules = []


def common_reg_result_to_id(x):
  return x[20: -2]


def add_blocks_rule(template_key, generator_src_path, method_id_reg,
                    method_reg_result_to_id):
  blocks_rules.append({
    'key': template_key,
    'src': generator_src_path,
    'reg': method_id_reg,
    'reg_to_id': method_reg_result_to_id
  })


def build_demo_page(template_file, output_file):
  # Read template from file
  template_content = ''
  with open(template_file) as f:
    for line in f.readlines():
      template_content += line

  # Resolve content according to block rules
  for rule in blocks_rules:
    key = rule['key']
    src_path = rule['src']
    reg = rule['reg']
    reg_to_id = rule['reg_to_id']

    generator_content = ''
    with open(src_path) as f:
      for line in f.readlines():
        generator_content += line
    res = re.findall(reg, generator_content)
    res = [reg_to_id(x) for x in res]
    print('Load blocks count %d from "%s"' % (len(res), src_path))
    tensorflow_blocks_content = ''
    for block_name in res:
      tensorflow_blocks_content += BLOCK_TAG_FORMAT % block_name
    print('Added blocks tags to %s' % key)
    template_content = template_content.replace(
      '{{ %s }}' % key, tensorflow_blocks_content)

  with open(output_file, mode='w') as output_file:
    output_file.write(template_content)
  print('Finished building tensorflow demo page.')


if __name__ == '__main__':
  add_blocks_rule(template_key='tensorflow_blocks',
                  generator_src_path='../../generators/javascript/tensorflow.js',
                  method_id_reg=TF_BLOCK_REG,
                  method_reg_result_to_id=common_reg_result_to_id)
  add_blocks_rule(template_key='tensorflow_helper_blocks',
                  generator_src_path='../../generators/javascript/tensorflow_helper.js',
                  method_id_reg=TF_HELPER_BLOCK_REG,
                  method_reg_result_to_id=common_reg_result_to_id)
  build_demo_page('index.tpl', 'index.html')
