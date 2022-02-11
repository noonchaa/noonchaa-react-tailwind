import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import Sub from './sub'

afterEach(cleanup)

test('render a menu block',()=>{
    render(<Sub>Link</Sub>)
    expect(screen.getByText('Link')).toBeInTheDocument()
})