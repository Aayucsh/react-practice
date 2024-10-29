import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full h-10 p-12 flex justify-between items-center'>
      <div className='text-red-500 text-2xl '>Orange</div>
      <div className='bg-red-500 text-white h-8 px-3 rounded-md flex justify-center items-center shadow-lg shadow-red-400 '>Favourites <span className='w-5 h-5 ml-2 text-xs rounded-full bg-red-700 flex items-center justify-center'>{data.filter((item)=>item.added).length}</span> </div>
    </div>
  )
}

export default Navbar
