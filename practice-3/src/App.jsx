import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './Components/Cards'
import Rece from './Components/Rece'

function App() {

  const [users, setusers] = useState([])  

  const handleform = (data)=>{
    setusers([...users, data])
  }
  const handleRemove = (id)=>{
    setusers(()=> users.filter((item, index)=> index != id))
  }

  return (
    <div className='w-full h-screen bg-zinc-200 flex justify-center flex-col'>
    <Cards users={users} handleRemove={handleRemove} />
    <Rece handleform={handleform} />
    </div>
  )
}

export default App