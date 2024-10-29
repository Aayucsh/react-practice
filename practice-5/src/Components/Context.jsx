import React, { createContext, useState } from 'react'

export const userContext = createContext()

const Context = (props) => {
  const [users, setusers] = useState([
    {id:0, name: "Aayush", Country: "India"},
    {id:1, name: "Mark", Country: "USA"},
    {id:2, name: "Friedrik", Country: "Spain"},
    {id:3, name: "Sheikh", Country: "UAE"}
  ])
  return (
    <userContext.Provider value={{users, setusers}}>
      {props.children}
    </userContext.Provider>
  )
}

export default Context
