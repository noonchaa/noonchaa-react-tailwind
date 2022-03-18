import React from "react";
import { FormCTA } from "../..";

export default {
    component: FormCTA
}

export const formCTA = args => (
    <FormCTA
        title='Join us and get the update from anywhere'
        lead="Attention! Offer expires in 30 days. Make sure not to miss this opportunity"
        buttonText="Get Started"
        {...args}
        submit={(e)=>{
            e.preventDefault()
            alert(e.target.email.value)
            e.target.reset()
        }}
    />
)