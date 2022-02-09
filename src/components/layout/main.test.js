import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import Main from './main'

afterEach(cleanup)

test('should render main role',()=>{
    render(<Main/>)
    expect(screen.getByRole('main')).toBeInTheDocument()
})
test('should render child element',()=>{
    render(<Main><h1>Text</h1></Main>)
    expect(screen.getByRole('main')).toContainElement(screen.getByRole('heading'))
    expect(screen.getByRole('main')).toHaveTextContent('Text')
})