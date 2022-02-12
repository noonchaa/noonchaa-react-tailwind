import React, { useState } from "react";
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Button from "./button";

afterEach(cleanup)

const types = ['submit','reset','button']
const sizes = ['small','normal','big']
const colors = ['success','info','warning','danger','normal']

test('render a button',()=>{
    render(<Button/>)
    expect(screen.getByRole('button')).toBeInTheDocument()
})
types.map((item)=>{
    test('type button',()=>{
        render(<Button type={item}/>)
        expect(screen.getByRole('button')).toHaveAttribute('type',item)
    })
})
sizes.map((item)=>{
    test('size of a button',()=>{
        render(<Button size={item}/>)
        expect(screen.getByRole('button')).toHaveClass(item==='small'?'text-sm':item==='normal'?'text-base':'text-lg')
    })
})
colors.map((item)=>(
    test('change background color',()=>{
        render(<Button color={item}/>)
        expect(screen.getByRole('button')).toHaveClass(item==='success'?'bg-emerald-500':item==='info'?'bg-blue-500':item==='warning'?'bg-yellow-500':item==='danger'?'bg-red-500':item==='normal'?'bg-slate-500':'')
    })
))
// test('click',()=>{
//     const Mock = () => {
//         const [text, setText] = useState('text')
//         return <Button onClick={()=>setText('click')}>{text}</Button>
//     }
//     render(<Mock/>)
//     expect(screen.getByRole('button')).toHaveTextContent('text')
//     fireEvent.click(screen.getByRole('button'))
//     expect(screen.getByRole('button')).toHaveTextContent('click')
// })
test('with icon',()=>{
    render(<Button icon='/'/>)
    expect(screen.getByRole('img')).toBeInTheDocument()
})
test('icon with text',()=>{
    render(<Button icon='/'>text</Button>)
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent('text')
})