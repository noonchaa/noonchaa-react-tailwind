import React from "react";
import { Toggle, Main } from "../..";

export default {
    component: Toggle,
    argTypes: {
        Descriptions : {
            description: 'Import this component to enabled toggling between light and dark mode'
        }
    }
}
const Template = (args) => {
    return(
        <Main>
            <div style={{padding:'24px'}}>
                <Toggle {...args} />
            </div>
        </Main>
    )
}

export const Props = Template.bind({})