import React from 'react'

function Cards({values, handleclick, index}) {
  const {name, image, artist, added} = values

  return (
    <div className='bg-zinc-100 h-[120px] w-[200px] rounded-xl flex-shrink-0 flex relative overflow-hidden'>
      <div className='w-1/2 '>
      <img className='object-cover  h-full' src={image} />
      </div>
      <div className='h-full w-1/2 flex justify-center items-center flex-col relative '>
      <h1 className='text-xl text-blue-600'>{name}</h1>
      <h1 className='text-sm text-blue-700'>{artist}</h1>
      <button onClick={()=>handleclick(index)} className={`bg-blue-900 rounded-md right-8 w-32 bottom-2 absolute text-white text-sm `}>{added  ? "Added": "Add to Favourites"}</button>
      </div>
    </div>
  )
}

export default Cards
