import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import Menu from './menu'

afterEach(cleanup)

test('render a menu block',()=>{
    render(<Menu>Link</Menu>)
    expect(screen.getByText('Link')).toBeInTheDocument()
})
test('menu block change class to hidden',()=>{
    render(<Menu open >Link</Menu>)
    expect(screen.getByText('Link')).toHaveClass('items-center')
})
test('menu block change class to hidden',()=>{
    render(<Menu toggle='yes' >Link</Menu>)
    expect(screen.getByText('yes')).toBeInTheDocument()
})