import React from "react";
import GridFeature from "./gridFeature";
import Grid from "./grid";
import { cleanup, render, screen } from "@testing-library/react";

afterEach(cleanup)

test('grid box',()=>{
    render(<Grid><p>test</p></Grid>)
    expect(screen.getByText('test')).toBeInTheDocument()
})
test('grid icon',()=>{
    render(<Grid icon={<p>p</p>}/>)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
})
test('grid icon',()=>{
    render(<Grid color="#000000" icon={<p>p</p>}/>)
    expect(screen.getByTestId('icon')).toHaveStyle({color:'#000000'})
})
test('grid feature icon',()=>{
    render(<GridFeature><p>test</p></GridFeature>)
    expect(screen.getByText('test')).toBeInTheDocument()
})