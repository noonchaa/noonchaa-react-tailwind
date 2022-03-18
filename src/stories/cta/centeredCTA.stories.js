import React from "react";
import { CenteredCTA } from "../..";

export default {
    component: CenteredCTA
}

const appStore = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                </svg>

const mail = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>

export const centeredCTA = args => (
    <CenteredCTA
        title="Try something really different right now."
        lead="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto recusandae tenetur iste quaerat voluptatibus quibusdam nam repudiandae"
        buttonText1="Learn How"
        buttonText2="Subscribe"
        {...args}
        icon1={appStore}
        icon2={mail}
        buttonClick1={()=>alert('button 1 click')}
        buttonClick2={()=>alert('button 2 click')}
    />
)