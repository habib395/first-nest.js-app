"use client"
import LoginButton from '@/app/components/LoginButton'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Image from "next/image"

export default function Navbar() {
  const { data: session, status} = useSession()
  console.log(session)
  return (
   <nav>
     <div>
        <ol className='flex justify-between items-center gap-10 w-10/12 mx-auto py-3'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/addBlog'>Add Blog</Link></li>
            {status == 'authenticated' ? (
              <>
              <li><Image src={session?.user?.image} width={20} height={20} alt={session?.user?.name} /> </li>

              <li onClick={() => signOut()}>Logout</li>
              </>
            ) : (
              <>
              <li><Link href='/login'>Login</Link></li>
              <li><Link href='/register'>Register</Link></li>
              </>
            )}
            <li><LoginButton></LoginButton></li>
        </ol>
    </div>
   </nav>
  )
}