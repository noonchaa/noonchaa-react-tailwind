import React from "react";
import { User } from "../..";

export default {
    component: User
}

export const user = args => (
    <User
        {...args}
    />
)