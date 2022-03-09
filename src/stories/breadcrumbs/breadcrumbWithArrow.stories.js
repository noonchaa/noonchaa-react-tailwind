import {BreadcrumbWithArrow} from '../..'

export default {
    component: BreadcrumbWithArrow
}

const link = ['Account','Profile','setting']

export const breadcrumbWithArrow = () => (
    <BreadcrumbWithArrow
    links={link.map((item,index)=>(
        <p style={{display:'inline'}} key={index}>{item}</p>
    ))}
    />
)