'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const pathname = usePathname();
  return (
   <section className='flex left-0 top-0 sticky flex-col justify-between h-screen w-fit text-white bg-dark-1 p-6 pt-28 max-sm:hidden lg:w-[264px]'>

    <div className='flex flex-col flex-1 gap-6 '>

        {sidebarLinks.map((link)=>{
            const isActive =  pathname === link.route || pathname.startsWith('${link.route}/');

            return (
                <Link
                href={link.route}
                key={link.label}
                className={cn('flex gap-4 p-4 rounded-lg items-center justify-start' , {
                   'bg-blue-950' : isActive
                })}
                >

                   <Image
                   src={link.imgURL}
                   alt= {link.label}
                   width={20}
                   height={20} /> 

                   <p className='text-md font-semibold max-lg:hidden'> {link.label}</p>
                </Link>
            )
        })}

    </div>

   </section>
  )
}

export default Sidebar