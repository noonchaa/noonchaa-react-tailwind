import React from "react";
import {ArticleWithImage} from '../..'

export default {
    component: ArticleWithImage
}

export const articleWithImage = args => (
    <ArticleWithImage
    img='https://source.unsplash.com/3IR3fozccY8'
    tag="Design"
    avatar='https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60'
    author="John Doe"
    date={new Date().toLocaleDateString('en',{year:'numeric',month:'long',day:'2-digit'})}
    {...args}>
        <p>Pleased him another was settled for. Moreover end horrible endeavor entrance any families. Income appear extent on of thrown in admire. Stannite on we if vicinity material in.</p>
    </ArticleWithImage>
)