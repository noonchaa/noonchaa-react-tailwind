import React, { useEffect, useState } from "react";
import { FAQ, Question } from "../..";

export default {
    component: FAQ
}

export const faq = args => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(data=>data.json()).then(doc=>setData(doc.slice(0,5)))
    },[])

    return(
        <FAQ title="Frequently asked questions" {...args}>
            {data.map((item,index)=>(
                <Question gray title={item.title} key={index}>
                    {item.body}
                </Question>
            ))}
        </FAQ>
    )
}