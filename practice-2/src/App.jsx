import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'

function App() {
  const data = [{name: "I Guess", image:"https://images.genius.com/2a489e4b1f194dc360454de9ae8328ea.1000x1000x1.jpg", artist:"KR$NA", added: false },
    {name:"No limit", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXzAjDT5ZNYhEqn_i1Im33EETxmq2QdWNXg&s", artist: "Badshah", added: false},
    {name:"Legacy", image: "https://c.saavncdn.com/245/Legacy-Hindi-2023-20230925144415-500x500.jpg", artist: "Raftaar", added: false},
    {name:"Warcry", image: "https://i.scdn.co/image/ab67616d0000b2730be866d7779f5058a81e48c4", artist: "King", added: false},
    {name:"MKL", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcb7HnWdOxuNhwx-X7xBH2PYA_EmmncXGEg&s", artist: "Emiway Bunti", added: false}]

    const [added, setadded] = useState(data)


    let handleclick= (index)=>{
      setadded((prev)=>{
        return prev.map((item, itemindex)=>{
          if(index=== itemindex){
            return {...item, added: !item.added }
          }
          return item
        })
      })
    }

  return (
    <div className='h-screen w-full bg-zinc-200'>
      <Navbar data={added} />
      <div className=' w-full flex py-0 px-16 gap-24 flex-wrap mt-5 '>
      {added.map((item, index)=><Cards key={index} values={item} handleclick={handleclick} index={index} />)}
      </div>
    </div>
  )
}

export default App