import {BreadcrumbFullWidth} from '../..'

export default {
    component: BreadcrumbFullWidth
}

const link = ['page1','page2','page3']

export const breadcrumbFullWidth = () => (
    <BreadcrumbFullWidth
    home={<p>Home</p>}
    links={link.map((item,index)=>(
        <a key={index}>{item}</a>
    ))}
    />
)