import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import {MediaFeature} from ".";
import LeftIcon from "./leftIcon";

afterEach(cleanup)

test('left icon',()=>{
    render(<LeftIcon><p>test</p></LeftIcon>)
    expect(screen.getByText('test')).toBeInTheDocument()
})
test('display an icon',()=>{
    render(<LeftIcon icon={<p>p</p>}/>)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
})
test('left icon color',()=>{
    render(<LeftIcon color="#000000" icon={<p>p</p>}/>)
    expect(screen.getByTestId('icon')).toHaveStyle({color:'#000000'})
})
test('left icon iconBgColor',()=>{
    render(<LeftIcon iconBgColor="#000000" icon={<p>p</p>}/>)
    expect(screen.getByTestId('icon')).toHaveStyle({backgroundColor:'#000000'})
})
test('media feature container',()=>{
    render(<MediaFeature><p>test</p></MediaFeature>)
    expect(screen.getByText('test')).toBeInTheDocument()
})
test('media feature container',()=>{
    render(<MediaFeature media="/"/>)
    expect(screen.getByTestId('media')).toBeInTheDocument()
})