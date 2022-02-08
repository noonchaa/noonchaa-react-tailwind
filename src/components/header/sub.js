import React from "react";

const Sub = ({children}) => {
    return (
        <div className="bg-slate-100 dark:bg-slate-600">
            <div className="container mx-auto px-2 md:px-0 py-2 lg:py-4">
                {children}
            </div>
        </div>
    )
}

export default Sub