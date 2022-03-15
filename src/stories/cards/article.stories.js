import React from 'react'
import {Article} from '../..'

export default {
    component: Article
}

export const article = args => (
    <Article
    date={new Date().toLocaleDateString('en',{year:'numeric',month:'long',day:'2-digit'})}
    onClick={()=>alert('button click')}
    buttonText='Button'
    avatar='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'
    author='Brenda'
    {...args}
    title={<a>Accessibility tools for designers and developers</a>} 
    linkRead={<a></a>}
    >
        <p>
            Pleased him another was settled for. Moreover end horrible endeavor entrance any families. Income appear extent on of thrown in admire. Stannite on we if vicinity material in.
        </p>
    </Article>
)