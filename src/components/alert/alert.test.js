import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Alert from './alert'

afterEach(cleanup)

test('render alert',()=>{
    render(<Alert>Alert</Alert>)
    expect(screen.getByText('Alert')).toBeInTheDocument()
})
test('hide full alert',()=>{
    render(<Alert full>Alert</Alert>)
    expect(screen.getByTestId('full')).toHaveClass('container')
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId('full')).toHaveClass('hidden')
})
test('bg color as type',()=>{
    render(<Alert full success>Alert</Alert>)
    expect(screen.getByTestId('full')).toHaveClass(`bg-emerald-500`)
})
test('bg color as type',()=>{
    render(<Alert full info>Alert</Alert>)
    expect(screen.getByTestId('full')).toHaveClass(`bg-blue-500`)
})
test('bg color as type',()=>{
    render(<Alert full warning>Alert</Alert>)
    expect(screen.getByTestId('full')).toHaveClass(`bg-yellow-400`)
})
test('bg color as type',()=>{
    render(<Alert full danger>Alert</Alert>)
    expect(screen.getByTestId('full')).toHaveClass(`bg-red-500`)
})
test('cek svg',()=>{
    render(<Alert success/>)
    expect(screen.getByTestId('success')).toBeInTheDocument()
})
test('cek svg',()=>{
    render(<Alert info/>)
    expect(screen.getByTestId('info')).toBeInTheDocument()
})
test('cek svg',()=>{
    render(<Alert warning/>)
    expect(screen.getByTestId('warning')).toBeInTheDocument()
})
test('cek svg',()=>{
    render(<Alert danger/>)
    expect(screen.getByTestId('danger')).toBeInTheDocument()
})
test('cek svg',()=>{
    render(<Alert notify/>)
    expect(screen.getByTestId('notify')).toBeInTheDocument()
})