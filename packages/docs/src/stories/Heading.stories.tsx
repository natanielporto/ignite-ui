import type { StoryObj, Meta } from "@storybook/react";
import { Headign, HeadignProps } from "@ignite-ui/react";

export default {
  title: "Typography/Headign",
  component: Headign,
  args: {
    size: "md",
    children: "Custom title",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadignProps>;

export const Primary: StoryObj<HeadignProps> = {};
export const CustomTag: StoryObj<HeadignProps> = {
  args: {
    children: "H1 Headign",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão o heading sempre será um `h2` mas podemos alterar isso com a propriedade `as`",
      },
    },
  },
};
