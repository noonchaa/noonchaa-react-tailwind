import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import Links from './links'

afterEach(cleanup)

test('render a links block',()=>{
    render(<Links>Link</Links>)
    expect(screen.getByText('Link')).toBeInTheDocument()
})
test('centered links block',()=>{
    render(<Links centered>Link</Links>)
    expect(screen.getByText('Link')).toHaveClass('flex-row')
})