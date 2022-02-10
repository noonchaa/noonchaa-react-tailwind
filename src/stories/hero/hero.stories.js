import React from "react";
import { Hero, Main } from "../..";

export default {
    component: Hero,
}
export const standard = () => {
    return(
        <Main>
            <Hero>
                <Hero.Sided>
                    <Hero.Title>This is the big text of a Hero</Hero.Title>
                    <p>This is a sub text for hero</p>
                </Hero.Sided>
                <Hero.Image side img='https://source.unsplash.com/c-NEiPIxpYI'/>
            </Hero>
        </Main>
    )
}
export const StackedHero = () => (
    <Main>
        <Hero stack>
            <Hero.Title>This is the big text of a Hero</Hero.Title>
            <p>This is a sub text for hero</p>
            <Hero.Image img='https://source.unsplash.com/c-NEiPIxpYI'/>
        </Hero>
    </Main>
)
export const fullBackground = () => (
    <Main>
        <Hero fullBG='https://source.unsplash.com/c-NEiPIxpYI'>
            <Hero.Title>This is the big text of a Hero</Hero.Title>
            <p>This is a sub text for hero</p>
        </Hero>
    </Main>
)