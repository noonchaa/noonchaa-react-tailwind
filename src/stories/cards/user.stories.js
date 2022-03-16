import React from "react";
import { User } from "../..";

export default {
    component: User
}

export const user = args => (
    <User
        role="React Developer"
        {...args}
        img={<img src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar"/>}
        name={<a>John Doe</a>}
    />
)