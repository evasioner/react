import React from 'react';
import { Story, Meta } from '@storybook/react';
import {PaymentProps, Payment} from "./Payment";

export default {
  title: 'Example/Payment',
  component: Payment,
} as Meta;

const Template: Story<PaymentProps> = (args) => <Payment {...args} />;

export const Payments = Template.bind({});
Payments.args = {
};
