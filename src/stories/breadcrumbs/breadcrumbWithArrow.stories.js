import {BreadcrumbWithArrow} from '../..'

export default {
    component: BreadcrumbWithArrow
}

const link = ['page1','page2','page3']

export const breadcrumbWithArrow = () => (
    <BreadcrumbWithArrow
    home={<p>Home</p>}
    links={link.map((item,index)=>(
        <a key={index}>{item}</a>
    ))}
    />
)