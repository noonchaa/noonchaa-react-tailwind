import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Dark from "./dark";

afterEach(cleanup)

const Mock = () => {
    const [colorTheme, setTheme] = Dark()
    return <h1 onClick={()=>setTheme(colorTheme)}>{colorTheme}</h1>
}

test('change theme',()=>{
    render(<Mock/>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent('dark')
    fireEvent.click(screen.getByRole('heading'))
    expect(screen.getByRole('heading')).toHaveTextContent('light')
})