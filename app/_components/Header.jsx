"use client"
import {Button} from '../../components/ui/button'
import Image from 'next/image'
import { signIn, useSession } from "next-auth/react"
import { useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  const { data } = useSession()
  useEffect(() => {
    console.log(data);
  }, [data])
  
  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo.svg" alt="Logo" width={180} height={105} />
        <div className="md:flex gap-6 items-center hidden">
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer '>Home</h2>
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer '>Services</h2>
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer '>About us</h2>
        </div>
      </div>
      <div>
        {data?.user ?
        <Image src={data?.user?.image} alt="Profile" width={40} height={40} className='rounded-full' />  :
          
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button onClick={() => signIn('descope')}>Login / Signup</Button>
            </DropdownMenuTrigger>
  <DropdownMenuContent>
              <DropdownMenuLabel>
                My Account
              </DropdownMenuLabel>
    <DropdownMenuSeparator />
              <DropdownMenuItem>
                My bookings
              </DropdownMenuItem>
              <DropdownMenuItem>
                Logout
              </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

      }
        {/* {data ? <Button onClick={() => signOut()}>Logout</Button> : <Button onClick={() => signIn('Maidsforus')}>Login / Signup</Button>} */}
        </div>
    </div>
  )
}

export default Header
