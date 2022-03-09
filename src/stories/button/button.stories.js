import React from 'react'
import { Button } from '../..'
import icon from '../asset/RedX.svg'
import adjust from '../asset/adjust.svg'

export default {
    component: Button
}

const button = (args) => <Button {...args}/>

export const standard = button.bind({})
standard.args = {
    children: 'Button one'
}
export const withIcon = button.bind({})
withIcon.args = {
    children: 'Button',
    icon: icon
}
export const justIcon = button.bind({})
justIcon.args = {
    icon: adjust
}