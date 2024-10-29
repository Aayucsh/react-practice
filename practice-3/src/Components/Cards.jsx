import React from 'react'
import Card from './Card'

function Cards({users, handleRemove}) {

  return (
    <div className='bg-sky-0 w-10/12 mx-auto  p-5 flex justify-center flex-wrap gap-12'>
      {users.map((item,index)=><Card key={index} handleRemove={handleRemove} id={index} items={item} />)}
    </div>
  )
}

export default Cards
