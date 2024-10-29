import React, { useContext } from 'react'
import Users from './Users'
import { userContext } from './Context'
import { Link } from 'react-router-dom'

const Cards = () => {
  const {users} = useContext(userContext)
  return (
    <div className='m-10'>
      <h1 className='text-5xl text-blue-500 font-semibold'>Users List</h1>
      {users.map((u)=><Link key={u.id} to={`/user/${u.id}`} className='bg-red-300 p-3 inline-block mr-2 rounded mt-5'>{u.name}</Link>)}
    </div>
  )
}

export default Cards