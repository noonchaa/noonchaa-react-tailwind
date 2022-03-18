import React from "react";
import { ImageCTA } from "../..";

export default {
    component: ImageCTA
}

const appStore = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                </svg>

const mail = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>

export const imageCTA = args => (
    <ImageCTA
        title="Download our free mobile app"
        lead="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto recusandae tenetur iste quaerat voluptatibus quibusdam nam repudiandae "
        button1Text="Download App"
        button2Text="Subscribe"
        {...args}
        img={<img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" className="object-cover h-full" alt="image"/>}
        icon1={appStore}
        icon2={mail}
        button1Click={()=>alert('button 1 click')}
        button2Click={()=>alert('button 2 click')}
    />
)