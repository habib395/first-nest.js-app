
import LoginButton from '@/app/components/LoginButton'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
   <nav>
     <div>
        <ol className='flex justify-between items-center gap-10 w-10/12 mx-auto py-3'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/addBlog'>Add Blog</Link></li>
            <li><Link href='/login'>Login</Link></li>
            <li><Link href='/register'>Register</Link></li>
            <li><LoginButton></LoginButton></li>
        </ol>
    </div>
   </nav>
  )
}
