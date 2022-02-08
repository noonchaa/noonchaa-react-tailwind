import React from "react";
import { Main, Container } from "../components";

export default {
    title: 'Layout/Container',
    component: Container
}
const Template = (args) => {
    return(
        <Main slate>
            <Container {...args}/>
        </Main>
    )
}

export const Props = Template.bind({})
Props.args = {
    children: 
    <div style={{border:'1px solid red'}}>
        <p style={{marginBottom:'32px'}}>Wrapper container to prevent breaking display to big and keep align block in center viewport also preserve side margin and padding</p>
    </div>
}