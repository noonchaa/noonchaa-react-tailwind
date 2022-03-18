import React from "react";
import {Question} from '../..'

export default {
    component: Question
}

export const question = args => (
    <Question
        title="Lorem ipsum dolor sit?"
        {...args}
    >
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus? </p>
    </Question>
)