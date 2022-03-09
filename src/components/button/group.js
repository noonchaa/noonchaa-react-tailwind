import React from "react";

const Group = ({children}) => (
    <div class="p-1.5 w-full sm:w-auto overflow-hidden bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
            {children}
        </div>
    </div>
)
export default Group