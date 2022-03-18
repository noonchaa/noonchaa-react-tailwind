import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import ImageCTA from "./imageCTA";

afterEach(cleanup)

test('render CTA with Image',()=>{
    render(<ImageCTA/>)
    expect(screen.getByTestId('img')).toBeInTheDocument()
})
test('button 1',()=>{
    render(<ImageCTA button1Text="test" button1Color="#000000"/>)
    expect(screen.getByRole('button')).toHaveStyle({backgroundColor:'#000000'})
})
test('button 2',()=>{
    render(<ImageCTA button2Text="test" button2Color="#000000"/>)
    expect(screen.getByRole('button')).toHaveStyle({backgroundColor:'#000000'})
})