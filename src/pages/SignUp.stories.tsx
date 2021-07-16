import React from 'react';
import { Story, Meta } from '@storybook/react';
import {PaymentProps, Payment} from "./Payment";
import * as HeaderStories from "../stories/Header.stories";
import {SignUp, SignUpProps} from "./SignUp";

export default {
  title: 'Example/SignUp',
  component: SignUp,
} as Meta;

const Template: Story<SignUpProps> = (args) => <SignUp {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
