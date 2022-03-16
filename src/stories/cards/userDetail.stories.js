import React from "react";
import { UserDetail } from "../..";

export default {
    component: UserDetail
}

const code = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>

export const userDetail = args => (
    <UserDetail
        img="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        status="Coding"
        name='Jane Doe'
        role="React Developer"
        job="Freelance"
        address="Jakarta"
        email="JaneDoe@email.com"
        {...args}
        statusIcon={code}
    />
)