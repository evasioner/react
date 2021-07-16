import React from 'react';
import { Story, Meta } from '@storybook/react';
import {PaymentProps, Payment} from "./Payment";
import * as HeaderStories from "../stories/Header.stories";
import {StoreList, StoreListProps} from "./StoreList";

export default {
  title: 'Example/StoreList',
  component: StoreList,
} as Meta;

const Template: Story<StoreListProps> = (args) => <StoreList {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
