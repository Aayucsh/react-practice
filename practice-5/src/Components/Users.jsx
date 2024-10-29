import React, { useContext } from 'react'
import { userContext } from './Context'
import { useNavigate, useParams } from 'react-router-dom'

const Users = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const {users} = useContext(userContext)
  return (
    <div className='p-10'>
      <h1 className='text-3xl text-blue-600'><span>Hello, </span>{users[id].name}</h1>
      <h1 className='text-xl text-black '>{users[id].Country}</h1>
      <button onClick={()=>navigate(-1)} className='p-2 bg-black text-white rounded mt-5'>Go Back</button>
    </div>
  )
}

export default Users