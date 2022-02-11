import React from "react";

const Sided = ({children}) => {
    return(
        <div data-testid='side' className="w-full lg:w-1/2 lg:px-6">
            {children}
        </div>
    )
}
export default Sided