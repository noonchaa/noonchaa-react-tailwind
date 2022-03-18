import React from "react";
import { GridCTA } from "../..";

export default {
    component: GridCTA
}

export const gridCTA = args => (
    <GridCTA
        title1="Web development"
        lead1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex cupiditate corrupti aliquam eum vel consequuntur hic culpa unde natus officia enim est impedit consequatur aut, voluptatem minima repellat non!"
        button1Text="Start now"
        title2="App development"
        lead2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex cupiditate corrupti aliquam eum vel consequuntur hic culpa unde natus officia enim est impedit consequatur aut, voluptatem minima repellat non!"
        button2Text="Start now"
        {...args}
        button1Click={()=>alert('button 1 click')}
        button2Click={()=>alert('button 2 click')}
    />
)