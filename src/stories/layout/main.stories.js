import React from "react";
import { Hero, Main, Toggle } from "../..";

export default {
    component: Main
}
const Template = (args) => {
    return(
        <Main {...args}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'16px 64px'}}>
                <Hero.Title>
                    Wrapper full width to control background in dark and standard mode
                </Hero.Title>
                <Toggle/>
            </div>
        </Main>
    )
}

export const Props = Template.bind({})
Props.args = {}