import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import FormCTA from "./formCTA";

afterEach(cleanup)

test('render form CTA',()=>{
    render(<FormCTA/>)
    expect(screen.getByTestId('form')).toBeInTheDocument()
})
test('button style',()=>{
    render(<FormCTA buttonColor="#000000"/>)
    expect(screen.getByRole('button')).toHaveStyle({backgroundColor:'#000000'})
})