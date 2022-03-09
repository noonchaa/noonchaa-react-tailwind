import {BreadcrumbFullWidth} from '../..'

export default {
    component: BreadcrumbFullWidth
}

const link = ['Account','Profile','setting']

export const breadcrumbFullWidth = () => (
    <BreadcrumbFullWidth
    links={link.map((item,index)=>(
        <a key={index}>{item}</a>
    ))}
    />
)