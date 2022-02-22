import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import {Login, LoginFillImage, LoginSideImage, LoginWithSosMed} from '.'

afterEach(cleanup)

test('login',()=>{
    render(<Login/>)
    expect(screen.getByTestId('login')).toBeInTheDocument()
    expect(screen.getByTestId('view')).toBeInTheDocument()
    expect(screen.getByTestId('close-eye')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('view'))
    expect(screen.getByTestId('open-eye')).toBeInTheDocument()
})
test('login forget password & register link',()=>{
    render(<Login forget={<a>forgot password</a>} loading register={<a>Create one</a>}/>)
    expect(screen.getByText('forgot password')).toBeInTheDocument()
    expect(screen.getByText('Loading')).toBeInTheDocument()
    expect(screen.getByText('Create one')).toBeInTheDocument()
})

test('with social network',()=>{
    render(<LoginWithSosMed/>)
    expect(screen.getByTestId('social')).toBeInTheDocument()
    expect(screen.getByTestId('view')).toBeInTheDocument()
    expect(screen.getByTestId('close-eye')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('view'))
    expect(screen.getByTestId('open-eye')).toBeInTheDocument()
})
test('login forget password & register link',()=>{
    render(<LoginWithSosMed forget={<a>forgot password</a>} loading register={<a>Create one</a>}/>)
    expect(screen.getByText('forgot password')).toBeInTheDocument()
    expect(screen.getByText('Loading')).toBeInTheDocument()
    expect(screen.getByText('Create one')).toBeInTheDocument()
})

test('with side image',()=>{
    render(<LoginSideImage/>)
    expect(screen.getByTestId('sideImage')).toBeInTheDocument()
    expect(screen.getByTestId('view')).toBeInTheDocument()
    expect(screen.getByTestId('close-eye')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('view'))
    expect(screen.getByTestId('open-eye')).toBeInTheDocument()
})
test('login forget password & register link',()=>{
    render(<LoginSideImage forget={<a>forgot password</a>} loading register={<a>Create one</a>}/>)
    expect(screen.getByText('forgot password')).toBeInTheDocument()
    expect(screen.getByText('Loading')).toBeInTheDocument()
    expect(screen.getByText('Create one')).toBeInTheDocument()
})

test('fill image',()=>{
    render(<LoginFillImage/>)
    expect(screen.getByTestId('fillImage')).toBeInTheDocument()
    expect(screen.getByTestId('view')).toBeInTheDocument()
    expect(screen.getByTestId('close-eye')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('view'))
    expect(screen.getByTestId('open-eye')).toBeInTheDocument()
})
test('login forget password & register link',()=>{
    render(<LoginFillImage forget={<a>forgot password</a>} loading register={<a>Create one</a>}/>)
    expect(screen.getByText('forgot password')).toBeInTheDocument()
    expect(screen.getByText('Loading')).toBeInTheDocument()
    expect(screen.getByText('Create one')).toBeInTheDocument()
})