import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Sided from './half'

afterEach(cleanup)

test('render sided hero section',()=>{
    render(<Sided/>)
    expect(screen.getByTestId('side')).toBeInTheDocument()
})