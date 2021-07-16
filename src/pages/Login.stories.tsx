import React from 'react';
import { Story, Meta } from '@storybook/react';
import * as HeaderStories from "../stories/Header.stories";
import {Login, LoginProps} from "./Login";

export default {
  title: 'Example/Login',
  component: Login,
} as Meta;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
