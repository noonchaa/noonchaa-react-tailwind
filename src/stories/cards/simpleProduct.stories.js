import React from "react";
import { SimpleProduct } from "../..";

export default {
    component: SimpleProduct
}

export const simpleProduct = args => (
    <SimpleProduct
        img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
        title="Nike Air"
        price="$238"
        buttonText="add to cart"
        buttonClick={()=>alert('button click')}
        {...args}
    />
)