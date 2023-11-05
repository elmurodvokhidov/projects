import React from "react";

export const ContextData = React.createContext();

function ContextFunction({ children }) {
    function hello (){
        console.log('hello world!')
    }
    <ContextData.Provider value={{hello}}>
        {children}
    </ContextData.Provider>
};

export default ContextFunction;