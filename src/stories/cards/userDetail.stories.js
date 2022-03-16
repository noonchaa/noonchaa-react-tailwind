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
        status="Coding"
        role="React Developer"
        job="Freelance"
        address="Jakarta"
        email="JohnDoe@email.com"
        {...args}
        img={<img src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt='avatar'/>}
        name={<a>John Doe</a>}
        statusIcon={code}
    />
)