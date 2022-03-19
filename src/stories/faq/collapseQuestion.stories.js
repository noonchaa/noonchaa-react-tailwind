import React from "react";
import { Collapse } from "../..";

export default {
    component: Collapse
}

export const collapseQuestion = args => (
    <Collapse
        title='Lorem ipsum dolor sit?'
        {...args}
    >
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus? </p>
    </Collapse>
)