import React from 'react'
import { useForm } from 'react-hook-form'

function Rece({handleform}) {

  const {register, handleSubmit, reset} = useForm()

  const submitform = (data)=>{
    handleform(data)
    reset()
  }

  return (
    <div className='w-10/12 mx-auto flex justify-center mt-10 p-5'>
        <form  className='flex gap-8' onSubmit={handleSubmit(submitform)}>
            <input {...register('name')} className='h-10 rounded-md p-2 font-normal outline-blue-400' type="text" placeholder='Name' />
            <input {...register('email')} className='h-10 rounded-md p-2 font-normal outline-blue-400' type="text" placeholder='Email' />
            <input {...register('image')} className='h-10 rounded-md p-2 font-normal outline-blue-400' type="text" placeholder='Img URL' />
            <button className='h-10 rounded-md p-2 text-white font-semibold bg-blue-500 hover:bg-blue-600 ' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Rece