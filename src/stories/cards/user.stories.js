import React from "react";
import { User } from "../..";

export default {
    component: User
}

export const user = args => (
    <User
        img="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        role="React Developer"
        {...args}
        name={<a>John Doe</a>}
    />
)