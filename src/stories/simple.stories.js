import React from "react";
import {Main,Header,Hero} from '../../src'
import logo from './asset/RedX.svg'

export default {
    title: 'Simple Page'
}

export const SimplePage = () => (
    <Main>
        <Header centered sticky>
            <Header.Brand logo={logo}>NRT</Header.Brand>
        </Header>
        <Hero fullBG='https://source.unsplash.com/c-NEiPIxpYI'>
            <Hero.Title>This is the big text of a Hero</Hero.Title>
            <p>This is a sub text for hero</p>
        </Hero>
        <div style={{height:'100vh'}}/>
    </Main>
)