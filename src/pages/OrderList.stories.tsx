import React from 'react';
import { Story, Meta } from '@storybook/react';
import {PaymentProps, Payment} from "./Payment";
import * as HeaderStories from "../stories/Header.stories";
import {OrderList, OrderListProps} from "./OrderList";

export default {
  title: 'Example/OrderList',
  component: OrderList,
} as Meta;

const Template: Story<OrderListProps> = (args) => <OrderList {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
