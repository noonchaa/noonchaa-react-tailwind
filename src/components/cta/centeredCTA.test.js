import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import CenteredCTA from "./centeredCTA";

afterEach(cleanup)

test('render centered CTA',()=>{
    render(<CenteredCTA/>)
    expect(screen.getByTestId('centered')).toBeInTheDocument()
})
test('button 1',()=>{
    render(<CenteredCTA buttonText1="text" button1Color="#000000"/>)
    expect(screen.getByRole('button')).toHaveStyle({backgroundColor:'#000000'})
})
test('button 2',()=>{
    render(<CenteredCTA buttonText2="text" button2Color="#000000"/>)
    expect(screen.getByRole('button')).toHaveStyle({backgroundColor:'#000000'})
})