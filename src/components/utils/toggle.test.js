import React from "react";
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Toggle from './toggle'

afterEach(cleanup)

test('render a toggle comp',()=>{
    render(<Toggle/>)
    expect(screen.getByTestId('toggle')).toBeInTheDocument()
})
test('cek icon based on color theme',()=>{
    render(<Toggle/>)
    expect(screen.getByRole('img')).toHaveAttribute('alt','sun')
    fireEvent.click(screen.getByTestId('toggle'))
    expect(screen.getByRole('img')).toHaveAttribute('alt','moon')
})