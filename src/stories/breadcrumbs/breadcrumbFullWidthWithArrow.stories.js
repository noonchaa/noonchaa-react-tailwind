import {BreadcrumbFullWidthWithArrow} from '../..'

export default {
    component: BreadcrumbFullWidthWithArrow
}

const link = ['Account','Profile','setting']

export const breadcrumbFullWidthWithArrow = () => (
    <BreadcrumbFullWidthWithArrow
    links={link.map((item,index)=>(
        <p style={{display:'inline'}} key={index}>{item}</p>
    ))}
    />
)