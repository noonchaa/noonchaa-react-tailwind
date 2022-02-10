import React, { useState } from "react";
import { Header, Main, Toggle } from "../..";

export default {
    component: Header.Anchor,
}
const Template = (args) => {
    const [show, setShow] = useState(false)
    return(
        <Main>
            <Header onClick={()=>setShow(!show)}>
                <Header.Brand>NRT</Header.Brand>
                <Header.Menu open={show} toggle={<Toggle/>}>
                    <Header.Links>
                        <Header.Anchor {...args}>
                            <a href="#">Link 1</a>
                        </Header.Anchor>
                        <Header.Anchor {...args}>
                            <a href="#">Link 2</a>
                        </Header.Anchor>
                    </Header.Links>
                </Header.Menu>
            </Header>
            <Header.Sub>
                <Header.Links>
                    <Header.Anchor {...args}>
                        <a href="#">Sub Link 1</a>
                    </Header.Anchor>
                    <Header.Anchor {...args}>
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
}