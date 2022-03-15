import React from "react";
import { ProductRating } from "../..";

export default {
    component: ProductRating
}

export const productRating = args => (
    <ProductRating
        title="Nike Air"
        desc="Income appear extent on of thrown in admire"
        img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
        buttonClick={()=>alert('button click')}
        buttonText='add to cart'
        price="$134"
        star={4}
        {...args}
    />
)