import React from 'react';
import { Story, Meta } from '@storybook/react';
import * as HeaderStories from "../stories/Header.stories";
import {MyPage, MyPageProps} from "./MyPage";

export default {
  title: 'Example/MyPage',
  component: MyPage,
} as Meta;

const Template: Story<MyPageProps> = (args) => <MyPage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
