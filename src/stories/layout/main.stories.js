import React from "react";
import { Main, Toggle } from "../..";

export default {
    component: Main
}

export const main = args => (
    <Main {...args}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'16px 64px'}}>
            <h1 className="text-black dark:text-white">
                Wrapper full width to control background in dark and standard mode 
            </h1>
            <Toggle/>
        </div>
    </Main>
)