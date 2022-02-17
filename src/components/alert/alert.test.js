import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import {Danger, Info, Success, Warning, Notification, SuccessFull, InfoFull, WarningFull, DangerFull} from '.'

afterEach(cleanup)

test('success',()=>{
    render(<Success title='success'>Message</Success>)
    expect(screen.getByText('Message')).toBeInTheDocument()
})
test('info',()=>{
    render(<Info title='success'>Message</Info>)
    expect(screen.getByText('Message')).toBeInTheDocument()
})
test('warning',()=>{
    render(<Warning title='success'>Message</Warning>)
    expect(screen.getByText('Message')).toBeInTheDocument()
})
test('danger',()=>{
    render(<Danger title='success'>Message</Danger>)
    expect(screen.getByText('Message')).toBeInTheDocument()
})
test('notify',()=>{
    render(<Notification>Message</Notification>)
    expect(screen.getByText('Message')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
})
test('notify img',()=>{
    render(<Notification img=''>Message</Notification>)
    expect(screen.getByTestId('svg')).toBeInTheDocument()
})
test('success full',()=>{
    render(<SuccessFull title='success'>Message</SuccessFull>)
    expect(screen.getByText('Message')).toBeInTheDocument()
})
test('info full',()=>{
    render(<InfoFull title='success'>Message</InfoFull>)
    expect(screen.getByText('Message')).toBeInTheDocument()
})
test('warning full',()=>{
    render(<WarningFull title='success'>Message</WarningFull>)
    expect(screen.getByText('Message')).toBeInTheDocument()
})
test('danger full',()=>{
    render(<DangerFull title='success'>Message</DangerFull>)
    expect(screen.getByText('Message')).toBeInTheDocument()
})