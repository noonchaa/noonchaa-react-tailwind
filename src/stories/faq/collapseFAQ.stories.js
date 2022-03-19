import React, { useEffect, useState } from "react";
import {CollapseFAQ,Collapse} from "../..";

export default {
    component: CollapseFAQ
}

export const collapseFAQ = args => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(data=>data.json()).then(doc=>setData(doc.slice(10,15)))
    },[])

    return(
        <CollapseFAQ title='FAQ' {...args}>
            {data.map((item,index)=>(
                <Collapse key={index} title={item.title}>
                    {item.body}
                </Collapse>
            ))}
        </CollapseFAQ>
    )
}