import React from "react";
import { Main, Toggle } from "..";

export default {
    title: 'Layout/Main',
    component: Main
}
const Template = (args) => {
    return(
        <Main {...args}/>
    )
}

export const Props = Template.bind({})
Props.args = {
    children: 
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'16px 64px'}}>
        <p style={{marginBottom:'32px'}}>Wrapper full width to control background in dark and standard mode</p>
        <Toggle/>
    </div>
}