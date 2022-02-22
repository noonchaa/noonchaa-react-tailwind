import {BreadcrumbFullWidthWithArrow} from '../..'

export default {
    component: BreadcrumbFullWidthWithArrow
}

const link = ['page1','page2','page3']

export const breadcrumbFullWidthWithArrow = () => (
    <BreadcrumbFullWidthWithArrow
    home={<p>Home</p>}
    links={link.map((item,index)=>(
        <a key={index}>{item}</a>
    ))}
    />
)