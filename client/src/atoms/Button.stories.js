import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
    text: { control: "text" },
    fontColor: { control: "color" },
  },
};

export const StorybookButton = (args) => <Button {...args}></Button>;

StorybookButton.args = {
  text: 'button',
  color: 'white',
  fontColor: 'white',
}