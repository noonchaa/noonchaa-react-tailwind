import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import Brand from "./brand";

afterEach(cleanup)

test('render header brand',()=>{
    render(<Brand>NRT</Brand>)
    expect(screen.getByText('NRT')).toBeInTheDocument()
})
test('render brand logo',()=>{
    render(<Brand logo="img"></Brand>)
    expect(screen.getByRole('img')).toBeInTheDocument()
})