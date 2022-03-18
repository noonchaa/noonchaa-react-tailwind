import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import GridCTA from "./gridCTA";

afterEach(cleanup)

test('render grid CTA',()=>{
    render(<GridCTA/>)
    expect(screen.getByTestId('grid')).toBeInTheDocument()
})
test('button 1',()=>{
    render(<GridCTA button1Text="text" button1Color="#000000"/>)
    expect(screen.getByRole('button')).toHaveStyle({backgroundColor:'#000000'})
})
test('button 2',()=>{
    render(<GridCTA button2Text="text" button2Color="#000000"/>)
    expect(screen.getByRole('button')).toHaveStyle({backgroundColor:'#000000'})
})