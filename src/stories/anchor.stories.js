import React from "react";
import {Anchor} from '../components'

export default {
    title: 'Components/Link',
    component: Anchor,
}
const Template = (args) => <Anchor {...args} />;

export const Props = Template.bind({})
Props.args = {
    children: <a>link</a>
}