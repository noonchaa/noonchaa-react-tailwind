import React from "react";

const SimpleFeature = ({children}) => (
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {children}
            </div>
        </div>
    </section>
)

export default SimpleFeature