import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import HeroImage from './heroImage'

afterEach(cleanup)

test('render hero image',()=>{
    render(<HeroImage/>)
    expect(screen.getByTestId('normal')).toBeInTheDocument()
})
test('render sided hero image',()=>{
    render(<HeroImage side/>)
    expect(screen.getByTestId('side')).toBeInTheDocument()
})