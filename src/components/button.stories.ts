import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
};

export const Basic: Story = {
  args: {
    children: "Button",
  },
};

export default meta;
