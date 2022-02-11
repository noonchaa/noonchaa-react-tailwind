import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import Anchor from "./anchor";

afterEach(cleanup)

test('render a link wrapper',()=>{
    render(<Anchor>Link</Anchor>)
    expect(screen.getByText('Link')).toBeInTheDocument()
})
test('change text red',()=>{
    render(<Anchor color="red">link</Anchor>)
    expect(screen.getByText('link')).toHaveClass('hover:text-red-600')
})
test('change text blue',()=>{
    render(<Anchor color="blue">link</Anchor>)
    expect(screen.getByText('link')).toHaveClass('hover:text-blue-600')
})
test('change text green',()=>{
    render(<Anchor color="green">link</Anchor>)
    expect(screen.getByText('link')).toHaveClass('hover:text-green-600')
})
test('change text yellow',()=>{
    render(<Anchor color="yellow">link</Anchor>)
    expect(screen.getByText('link')).toHaveClass('hover:text-yellow-600')
})
test('text underline',()=>{
    render(<Anchor line>link</Anchor>)
    expect(screen.getByText('link')).toHaveClass('hover:underline')
})
test('text block',()=>{
    render(<Anchor block>link</Anchor>)
    expect(screen.getByText('link')).toHaveClass('hover:bg-slate-600')
})