import React from "react"

const Container = ({children}) => {
    return <div data-testid='container' className="container mx-auto">{children}</div>
}
export default Container