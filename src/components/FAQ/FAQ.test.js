import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import {CenteredFAQ,FAQ} from '.'

afterEach(cleanup)

test('render centered FAQ',()=>{
    render(<CenteredFAQ title="FAQ"/>)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
})
test('render FAQ',()=>{
    render(<FAQ title="FAQ"/>)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
})