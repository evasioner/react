import React from 'react';
import { Story, Meta } from '@storybook/react';
import {PaymentProps, Payment} from "./Payment";
import * as HeaderStories from "../stories/Header.stories";
import {PaymentComplete, PaymentCompleteProps} from "./PaymentComplete";

export default {
  title: 'Example/PaymentComplete',
  component: PaymentComplete,
} as Meta;

const Template: Story<PaymentCompleteProps> = (args) => <PaymentComplete {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
