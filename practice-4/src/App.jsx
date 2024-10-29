import React, { useState } from 'react'
import Toast from './Container/Toast'
import axios from 'axios'

const page = () => {
  const [items, setitems] = useState([])
  const getimages = async ()=>{
    try {
      let response =  await axios.get("https://picsum.photos/v2/list")
      let data = response.data
      setitems(data)
      
    } catch (error) {
      console.error("fetching error")
    }
  }


  return (
    <div className=' bg-black min-h-screen p-10  w-full'>
        <Toast getimages={getimages}  />
      <div>
        {items.map((item)=>(
          <img src={item.download_url} className='inline-block m-5 rounded' width={300} height={300} />
        ))}
      </div>
    </div>
  )
}

export default page
