import React from "react";
import { Toggle, Main } from "../..";

export default {
    component: Toggle,
}
export const Template = () => {
    return(
        <Main>
            <div style={{padding:'24px'}}>
                <Toggle/>
            </div>
        </Main>
    )
}
Template.storyName = 'Toggle'