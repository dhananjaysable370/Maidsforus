"use client";

import { Button } from '../../components/ui/button';
import Image from 'next/image';
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const { data: sessionData, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      console.log(sessionData);
    }
  }, [sessionData, status]);

  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo.svg" alt="Logo" width={180} height={105} />
        <div className="md:flex gap-6 items-center hidden">
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Home</h2>
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Services</h2>
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>About us</h2>
        </div>
      </div>
      <div>
        {status === "authenticated" ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="p-0 bg-transparent border-none hover:bg-transparent" // Remove background color and padding
              >
                {sessionData?.user?.image ? (
                  <Image src={sessionData.user.image} alt="Profile" width={40} height={40} className='rounded-full' />
                ) : (
                  "Profile"
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className='text-primary cursor-pointer'>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={() => {/* Handle My bookings click */}}>
                My bookings
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn('descope')}>Login / Signup</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
