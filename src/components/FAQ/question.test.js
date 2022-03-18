import React from "react";
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Question from "./question";

afterEach(cleanup)

test('render question box',()=>{
    render(<Question/>)
    expect(screen.getByTestId('question')).toBeInTheDocument()
})
test('gray background',()=>{
    render(<Question gray/>)
    expect(screen.getByTestId('question')).toHaveClass('bg-gray-100')
})
test('open the answer',()=>{
    render(<Question/>)
    expect(screen.getByTestId('text')).toHaveClass('hidden')
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId('text')).toHaveClass('p-8 text-sm text-gray-500 dark:text-gray-300')
})