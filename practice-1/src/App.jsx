import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './Components/Cards'

function App() {

  const raw = [{name: "Aayush", image:"https://images.unsplash.com/photo-1717007234891-13449a8b7664?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", profession: "Coder", friends:true},
    {name: "Harsh", image:"https://images.unsplash.com/photo-1579550300627-bac381ffcb0c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", profession: "Maali", friends: false},
    {name: "Shubham", image: "https://images.unsplash.com/photo-1618007032127-658530e41bb3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", profession: "Chapri", friends: false},
    {name: "Mohanlal", image: "https://images.unsplash.com/photo-1723747338983-da5fd1d09904?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", profession:"Hookah Smoker", friends: false}
  ]
  
  const [data, setdata] = useState(raw)

  var handleclick = (cindex)=>{
    setdata((prev)=>{
      return prev.map((item, index)=>{
        if (index === cindex){
          return {...item, friends: !item.friends}
        }else {return item}
      })
    })
  }

  return (
    <>
      <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-2'>
        {data.map((items, index)=> <Cards key={index} index={index} values={items} handleclick={handleclick}  />)}
      </div>
    </>
  )
}

export default App
