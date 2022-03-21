import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import {Card,CardFeature} from '.'

afterEach(cleanup)

test('card feature box',()=>{
    render(<Card color="#000000"><p>card</p></Card>)
    expect(screen.getByText('card')).toBeInTheDocument()
    expect(screen.getByTestId('card')).toHaveStyle({borderColor:'#000000'})
})
test('gray card feature box',()=>{
    render(<Card gray/>)
    expect(screen.getByTestId('card')).toHaveClass('bg-gray-100')
})
test('card feature container',()=>{
    render(<CardFeature><p>card</p></CardFeature>)
    expect(screen.getByText('card')).toBeInTheDocument()
})
test('centered card feature container',()=>{
    render(<CardFeature centered/>)
    expect(screen.getByTestId('center')).toHaveClass('text-center')
})