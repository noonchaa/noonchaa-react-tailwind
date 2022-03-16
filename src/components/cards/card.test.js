import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import {Article,ArticleWithImage,Product,ProductRating,SimpleProduct,Testimony} from './'

afterEach(cleanup)

test('render article card',()=>{
    render(<Article/>)
    expect(screen.getByTestId('article')).toBeInTheDocument()
})
test('article card button',()=>{
    render(<Article buttonText="design"/>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('design')).toBeInTheDocument()
})
test('article read more link',()=>{
    render(<Article linkRead={<a role='link'>read more</a>}/>)
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByText('read more')).toBeInTheDocument()
})
test('article avatar',()=>{
    render(<Article avatar="/img"/>)
    expect(screen.getByRole('img')).toBeInTheDocument()
})
test('article author',()=>{
    render(<Article author="john doe"/>)
    expect(screen.getByText('john doe')).toBeInTheDocument()
})
test('render articleImage',()=>{
    render(<ArticleWithImage/>)
    expect(screen.getByTestId('withImage')).toBeInTheDocument()
})
test('articleImage Image',()=>{
    render(<ArticleWithImage img="/image"/>)
    expect(screen.getByRole('img')).toBeInTheDocument()
})
test('articleImage tag',()=>{
    render(<ArticleWithImage tag="design"/>)
    expect(screen.getByText('design')).toBeInTheDocument()
})
test('articleImage avatar',()=>{
    render(<ArticleWithImage avatar="/image"/>)
    expect(screen.getByRole('img')).toBeInTheDocument()
})
test('render product card',()=>{
    render(<Product/>)
    expect(screen.getByTestId('product')).toBeInTheDocument()
})
test('render product with rating',()=>{
    render(<ProductRating/>)
    expect(screen.getByTestId('product-rating')).toBeInTheDocument()
})
test('star rating',()=>{
    render(<ProductRating star={1}/>)
    expect(screen.getByTestId('star')).toBeInTheDocument()
})
test('render simple product card',()=>{
    render(<SimpleProduct/>)
    expect(screen.getByTestId('simple')).toBeInTheDocument()
})
test('render testimony card',()=>{
    render(<Testimony/>)
    expect(screen.getByTestId('testy')).toBeInTheDocument()
})
test('border color',()=>{
    render(<Testimony color="#000000"/>)
    expect(screen.getByRole('img')).toHaveStyle({borderColor:'#000000'})
})