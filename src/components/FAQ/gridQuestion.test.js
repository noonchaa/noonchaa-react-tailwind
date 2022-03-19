import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import GridQuestion from "./gridQuestion";

afterEach(cleanup)

test('render Grid question',()=>{
    render(<GridQuestion/>)
    expect(screen.getByTestId('grid')).toBeInTheDocument()
})
test('grid icon',()=>{
    render(<GridQuestion icon={<p>icon</p>} iconBgColor='#000000'/>)
    expect(screen.getByTestId('icon')).toHaveStyle({backgroundColor:'#000000'})
})