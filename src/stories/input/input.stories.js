import React from "react";
import {Input} from '../..'

export default {
    component: Input
}

const Template = args => <Input {...args}/>

export const text = Template.bind({})
text.args = {
    type: 'text',
    label: 'Name',
    id: 'Name',
    name: 'Name',
}