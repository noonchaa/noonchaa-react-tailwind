import React from "react";
import { LeftIcon } from "../..";

export default {
    component: LeftIcon
}

const icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
</svg>

export const leftIcon = args => (
    <LeftIcon
        title="Lorem ipsum dolor"
        {...args}
        icon={icon}
    >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet </p>
    </LeftIcon>
)