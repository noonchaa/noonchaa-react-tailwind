import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import SimpleCTA from "./simpleCta";

afterEach(cleanup)

test('simple CTA',()=>{
    render(<SimpleCTA/>)
    expect(screen.getByTestId('simpleCTA')).toBeInTheDocument()
})
test('button 1',()=>{
    render(<SimpleCTA buttonText1="click" color="#000000"/>)
    expect(screen.getByTestId('button1')).toHaveStyle({backgroundColor:'#000000'})
})
test('button 2',()=>{
    render(<SimpleCTA buttonText2="second"/>)
    expect(screen.getByTestId('button2')).toBeInTheDocument()
})