import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import {CenteredFAQ,FAQ,GridFAQ} from '.'

afterEach(cleanup)

test('render centered FAQ',()=>{
    render(<CenteredFAQ title="FAQ"/>)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
})
test('render FAQ',()=>{
    render(<FAQ title="FAQ"/>)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
})
test('render grid FAQ',()=>{
    render(<GridFAQ title="FAQ"/>)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
})