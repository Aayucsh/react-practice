import React from 'react'

function Card({items, handleRemove, id}) {
  var {name,email, image} = items
  return (
    <div className='bg-zinc-100 w-48 h-48 rounded-lg flex justify-center items-center flex-col gap-1'>
      <img className='object-cover rounded-full w-10 h-10 ' src={image} alt="" />
      <h1 className='font-semibold '>{name}</h1>
      <h1 className='text-xs text-gray-500 font-semibold opacity-50'>{email}</h1>
      <p className='text-xs text-gray-700 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, molestiae! Voluptate </p>
      <button onClick={()=>handleRemove(id)} className='text-xs bg-red-600 hover:bg-red-700 text-white px-2 py-1 mt-1 rounded-md'>Remove</button>
    </div>
  )
}

export default Card
