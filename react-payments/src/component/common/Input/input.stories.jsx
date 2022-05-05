import Input from "./input.component";

export default {
  title: "Input",
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: "120px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  type: "number",
  placeholder: "number-input",
};
