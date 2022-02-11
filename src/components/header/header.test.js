import React, { useState } from "react";
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Header from '.'

afterEach(cleanup)

test('render header',()=>{
    render(<Header/>)
    expect(screen.getByTestId('header')).toBeInTheDocument()
})
test('transparent background',()=>{
    render(<Header glass/>)
    expect(screen.getByTestId('header')).toHaveClass('bg-transparent')
})
test('sticky header',()=>{
    render(<Header sticky/>)
    expect(screen.getByTestId('header')).toHaveClass('sticky')
})
test('if centered menu button will always hidden',()=>{
    render(<Header centered/>)
    expect(screen.getByTestId('centered')).toBeInTheDocument()
})