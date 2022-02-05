import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import Button from './Button'

afterEach(cleanup)

test('should render a button',()=>{
    render(<Button>text</Button>)
    expect(screen.getByRole('button'))
    expect(screen.debug())
})