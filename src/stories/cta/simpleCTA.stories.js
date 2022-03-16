import React from "react";
import { SimpleCTA } from "../..";

export default {
    component: SimpleCTA
}

export const simpleCTA = args => (
    <SimpleCTA
        title='Join us and get the update from anywhere'
        buttonText1='Buy Block Now'
        buttonText2="Join Journey"
        {...args}
        buttonClick1={()=>alert('button 1 click')}
        buttonClick2={()=>alert('button 2 click')}
    />
)