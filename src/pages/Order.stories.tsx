import React from 'react';
import { Story, Meta } from '@storybook/react';
import * as HeaderStories from "../stories/Header.stories";
import {Order, OrderProps} from "./Order";

export default {
  title: 'Example/Order',
  component: Order,
} as Meta;

const Template: Story<OrderProps> = (args) => <Order {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
