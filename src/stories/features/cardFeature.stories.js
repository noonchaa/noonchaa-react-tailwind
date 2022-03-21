import React from "react";
import { CardFeature, Card } from "../..";

export default {
    component: CardFeature
}

const icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>

export const cardFeature = args => (
    <CardFeature title="explore our awesome Components" lead="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus " {...args}>
        <Card icon={icon} title='Default Tailwind Config'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.
            </p>
        </Card>
        <Card icon={icon} title='Default Tailwind Config'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.
            </p>
        </Card>
        <Card icon={icon} title='Default Tailwind Config'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.
            </p>
        </Card>
    </CardFeature>
)