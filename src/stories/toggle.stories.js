import React from "react";
import { Toggle, Main } from "..";

export default {
    title: 'Utilities/Toggle',
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
            <Toggle {...args} />
        </Main>
    )
}

export const Props = Template.bind({})
Props.args = {}