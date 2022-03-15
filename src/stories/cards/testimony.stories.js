import React from "react";
import { Testimony } from "../..";

export default {
    component: Testimony
}

export const testimony = args => (
    <Testimony
        img="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
        title="Design Tools"
        content="Pleased him another was settled for. Moreover end horrible endeavor entrance any families. Income appear extent on of thrown in admire. Stannite on we if vicinity material in."
        name="John Doe"
        {...args}
    />
)