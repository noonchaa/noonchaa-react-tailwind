import React, { useEffect, useState } from "react";
import { CenteredFAQ, Question } from "../..";

export default {
    component: CenteredFAQ
}

export const centeredFAQ = args => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((doc)=>doc.json()).then(json=>{
            setData(json.slice(0,5))
        })
    },[])

    return(
        <CenteredFAQ title="Frequently asked questions" {...args}>
            {data.map((item,index)=>(
                <Question key={index} title={item.title}>{item.body}</Question>
            ))}
        </CenteredFAQ>
    )
}