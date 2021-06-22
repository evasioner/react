import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Footer, FooterProps } from './Footer';


export default {
  title: 'Example/Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
