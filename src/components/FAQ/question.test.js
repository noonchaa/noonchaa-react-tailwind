import React from "react";
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Question from "./question";

afterEach(cleanup)

test('render question box',()=>{
    render(<Question/>)
    expect(screen.getByTestId('question')).toBeInTheDocument()
})
test('open the answer',()=>{
    render(<Question/>)
    expect(screen.getByTestId('text')).toHaveClass('hidden')
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId('text')).toHaveClass('p-8 text-sm text-gray-500 dark:text-gray-300')
})