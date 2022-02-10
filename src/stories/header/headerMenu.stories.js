import React, { useState } from "react";
import { Header, Main, Toggle } from "../..";

export default {
    component: Header.Menu,
}
const Template = (args) => {
    const [show, setShow] = useState(false)
    return(
        <Main>
            <Header onClick={()=>setShow(!show)}>
                <Header.Brand>NRT</Header.Brand>
                <Header.Menu {...args} open={show} toggle={<Toggle/>}>
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
    desc: 'pass true/false state to open props in menu to control hide and show links on mobile, and pass Toggle comp to toggle prop to enable dark and light'
}