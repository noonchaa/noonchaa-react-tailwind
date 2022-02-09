import React, { useState } from "react";
import { Header, Main } from "../..";

export default {
    component: Header,
}
const Template = (args) => {
    const [show, setShow] = useState(false)
    return(
        <Main>
            <Header {...args} onClick={()=>setShow(!show)}>
                <Header.Brand>NRT</Header.Brand>
                <Header.Menu open={show}>
                    <Header.Links>
                        <Header.Anchor>
                            <a href="#">Link 1</a>
                        </Header.Anchor>
                        <Header.Anchor>
                            <a href="#">Link 2</a>
                        </Header.Anchor>
                    </Header.Links>
                </Header.Menu>
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
    Descriptions: 'If use centered it would hide button menu on mobile, centered all children, make sure you pass only brand name or short text links and make sure do not add to much Links, it would break the display on mobile'
}