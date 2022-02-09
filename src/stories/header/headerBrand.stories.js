import React, { useState } from "react";
import { Header, Main } from "../..";
import logo from '../asset/RedX.svg'

export default {
    component: Header.Brand,
}
const Template = (args) => {
    const [show, setShow] = useState(false)
    return(
        <Main>
            <Header onClick={()=>setShow(!show)}>
                <Header.Brand {...args}></Header.Brand>
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
    children: 'NRT',
    logo: logo
}