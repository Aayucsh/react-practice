import React from 'react'

function Cards({values, handleclick, index}) {
    const {image, name, profession, friends} = values

    
  return (
    <div className='bg-zinc-100 rounded-md overflow-hidden'>
      <div className='w-52 h-40 border-2 rounded-md overflow-hidden'><img className='-translate-y-8' src={image}  alt="" /></div>
      <div className='p-2'>
        <h1 className='font-semibold text-xl'>{name}</h1>
        <h1>{profession}</h1>
        <button onClick={()=>handleclick(index)} className={`px-2 py-1/2 my-1 ${friends ?  'bg-red-500': "bg-blue-500"} rounded-md text-white`}>{friends ? "Unfollow" : "Follow"}</button>
      </div>
    </div>
  )
}

export default Cards