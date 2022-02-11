import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Hero from './hero'

afterEach(cleanup)

test('render hero section',()=>{
    render(<Hero/>)
    expect(screen.getByTestId('normal')).toBeInTheDocument()
})
test('render hero section',()=>{
    render(<Hero stack/>)
    expect(screen.getByTestId('stack')).toBeInTheDocument()
})
test('render hero section',()=>{
    render(<Hero fullBG='/'/>)
    expect(screen.getByTestId('fullBG')).toBeInTheDocument()
})