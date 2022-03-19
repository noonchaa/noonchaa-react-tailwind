import React from "react";
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Collapse from "./collapse";

afterEach(cleanup)

test('render collapse question',()=>{
    render(<Collapse/>)
    expect(screen.getByTestId('collapse')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId('text')).toHaveClass('flex mt-8 md:mx-10')
})