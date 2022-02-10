import React, { useState } from "react";
import { Header, Main } from "../..";

export default {
    component: Header.Links,
}
const Template = (args) => {
    const [show, setShow] = useState(false)
    return(
        <Main>
            <Header onClick={()=>setShow(!show)} centered>
                <Header.Links {...args}>
                    <Header.Anchor>
                        <a href="#">Link 1</a>
                    </Header.Anchor>
                    <Header.Anchor>
                        <a href="#" className="mx-4">Link 2</a>
                    </Header.Anchor>
                </Header.Links>
            </Header>
            <Header.Sub>
                <Header.Links>
                    <Header.Anchor>
                        <a href="#">Sub Link 1</a>
                    </Header.Anchor>
                    <Header.Anchor>
                        <a href="#">Sub Link 2</a>
                    </Header.Anchor>
                </Header.Links>
            </Header.Sub>
            <div style={{height:'100vh'}}/>
        </Main>
    )
}

export const props = Template.bind({})
props.args = {
    desc: 'when header set to centered, set this comp to centered to prevent stacking link in mobile view and set margin each link properly',
    centered: true
}