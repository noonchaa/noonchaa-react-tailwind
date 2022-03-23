import React from "react";
import { GridFeature,Grid } from "../..";

export default {
    component: GridFeature
}

const icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>

const arrow = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
</svg>

export const gridFeature = args => (
    <GridFeature title="Explore our awesome component" lead="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus" {...args}>
    <Grid
        title="Lorem ipsum dolor"
        icon={icon}
        link={<a><span>Read more</span> {arrow}</a>}
        color='#ff0000'
        iconBgColor="#ffffff"
    >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet</p>
    </Grid>
    <Grid
        title="Lorem ipsum dolor"
        icon={icon}
        link={<a><span>Read more</span> {arrow}</a>}
        color='#ff0000'
        iconBgColor="#ffffff"
    >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet</p>
    </Grid>
    <Grid
        title="Lorem ipsum dolor"
        icon={icon}
        link={<a><span>Read more</span> {arrow}</a>}
        color='#ff0000'
        iconBgColor="#ffffff"
    >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet</p>
    </Grid>
    </GridFeature>
)