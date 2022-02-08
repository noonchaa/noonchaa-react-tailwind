import React from "react";
import { Header } from "..";
import Mode from "./mode";

export default {
    title: 'Components/Header',
    component: Header,
}
const Template = (args) => {
    return(
        <Mode>
            <Header {...args}>
                <Header.Brand>NRT</Header.Brand>
            </Header>
        </Mode>
    )
}

export const Props = Template.bind({})