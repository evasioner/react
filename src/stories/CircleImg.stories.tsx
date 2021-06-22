import React from 'react';
import { Story, Meta } from '@storybook/react';
import { circleImgProps, Img } from './CircleImg';


export default {
  title: 'Example/Input',
  component: Img,
} as Meta;

const Template: Story<circleImgProps> = (args) => <Img {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 'medium',
};
