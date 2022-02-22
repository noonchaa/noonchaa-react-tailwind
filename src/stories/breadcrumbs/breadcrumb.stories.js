import {Breadcrumb} from '../..'

export default {
    component: Breadcrumb
}

const link = ['page1','page2','page3']

export const breadcrumb = () => (
    <Breadcrumb
    home={<p>Home</p>}
    links={link.map((item,index)=>(
        <a key={index}>{item}</a>
    ))}
    />
)