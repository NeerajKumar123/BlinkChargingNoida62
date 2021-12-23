import React from "react"
const StateContext =  React.createContext({})
export const ContextWrapper =(props) =>{
    const [state,setContextState] =  React.useState({})
    return(
        <StateContext.Provider value={[state,setContextState]} value2 ="scsdsd">
            {props?.children}
        </StateContext.Provider>
    )
}

export default StateContext