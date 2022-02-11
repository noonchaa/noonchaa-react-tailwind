import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Title from './title'

afterEach(cleanup)

test('render hero image',()=>{
    render(<Title>NRT</Title>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent('NRT')
})