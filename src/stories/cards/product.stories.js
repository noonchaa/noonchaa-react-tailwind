import React from "react";
import {Product} from '../..'

export default {
    component: Product
}

export const product = args => (
    <Product
        title="nike air"
        buttonClick={()=>alert('click button')}
        desc='Income appear extent on of thrown in admire'
        buttonText="add to cart"
        price="$123"
        {...args}
        img={<img src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80' alt="product"/>}
    />
)