import React from "react";
import {Simple,SimpleFeature} from '../..'

export default {
    component: SimpleFeature
}

const icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>

const icon2 = <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>

const icon3 = <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>

export const simpleFeature = args => (
    <SimpleFeature {...args}>
        <Simple title="Default Tailwind Config" icon={icon}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.
            </p>
        </Simple>
        <Simple title="Fully Responsive Components" icon={icon2}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.
            </p>
        </Simple>
        <Simple title="Dark Mode Support" icon={icon3}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.
            </p>
        </Simple>
    </SimpleFeature>
)