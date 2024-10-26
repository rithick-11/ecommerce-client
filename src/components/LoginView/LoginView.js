import { Link } from 'react-router-dom'
import React from 'react'

export const LoginView = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
        <img  className='h-[320px]' alt="long in" src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?t=st=1729927492~exp=1729931092~hmac=f29fe218be77dd17a8068c9a416a444eaba78912f23e08f3b182f331100b6200&w=740" />
        <Link to="/sign-in-up" className='btn btn-primary'>to login</Link>
    </div>
  )
}
