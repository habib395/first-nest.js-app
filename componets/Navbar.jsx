import React from 'react'

export default function Navbar() {
  return (
   <nav>
     <div>
        <ol className='flex justify-between items-center gap-10 w-10/12 mx-auto py-3'>
            <li>Home</li>
            <li>Blog</li>
            <li>Add Blog</li>
            <li>Login</li>
            <li>Register</li>
        </ol>
    </div>
   </nav>
  )
}
