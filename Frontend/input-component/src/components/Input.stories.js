import  Input  from './Input.js';
const input = {
  title: 'Input',
  component: Input,
  argTypes: {
  },
};
export default input

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error:true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled:true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};
export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};
export const HelperText = Template.bind({});
HelperText.args = {
  helperText: 'Some helper text',
};
export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: 'phone',
};
export const EndIcon = Template.bind({});
EndIcon.args = {
  endIcon: 'lock',
};
export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
  rows: 10,
};
