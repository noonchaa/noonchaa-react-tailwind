import {Breadcrumb} from '../..'

export default {
    component: Breadcrumb
}

const link = ['Account','Profile','setting']

export const breadcrumb = () => (
    <Breadcrumb
    links={link.map((item,index)=>(
        <p style={{display:'inline'}} key={index}>{item}</p>
    ))}
    />
)