import React from 'react'
import {Hero} from '../index'

export default {
    title: 'Components/Hero',
    component: Hero,
}
const Template = (args) => <Hero {...args} />;

export const Props = Template.bind({});
Props.args = {
    children : <Hero.Title>This is hero</Hero.Title>
}