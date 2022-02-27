import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import {Breadcrumb, BreadcrumbFullWidth, BreadcrumbFullWidthWithArrow, BreadcrumbWithArrow} from ".";

afterEach(cleanup)

test('breadcrumb',()=>{
    render(<Breadcrumb home={<p>home</p>}/>)
    expect(screen.getByText('home')).toBeInTheDocument()
})
test('breadcrumb with arrow',()=>{
    render(<BreadcrumbWithArrow home={<p>home</p>}/>)
    expect(screen.getByText('home')).toBeInTheDocument()
})
test('breadcrumb full width',()=>{
    render(<BreadcrumbFullWidth home={<p>home</p>}/>)
    expect(screen.getByText('home')).toBeInTheDocument()
})
test('breadcrumb full width with arrow',()=>{
    render(<BreadcrumbFullWidthWithArrow home={<p>home</p>}/>)
    expect(screen.getByText('home')).toBeInTheDocument()
})