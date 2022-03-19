import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import {Simple,SimpleFeature} from '.'

afterEach(cleanup)

test('simple feature card',()=>{
    render(<Simple><p>test</p></Simple>)
    expect(screen.getByText('test')).toBeInTheDocument()
})
test('simple feature container',()=>{
    render(<SimpleFeature><p>test</p></SimpleFeature>)
    expect(screen.getByText('test')).toBeInTheDocument()
})