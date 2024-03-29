import React from 'react'
import Image from 'next/image'
import  logo from '/public/Logo.webp'
import Link from 'next/link'
import {ShoppingCart} from 'lucide-react'
function header() {
  return (
    <div className='flex justify-between items-center py-6 px-8'>
      <Link href={"/"}>
        <Image src={logo} alt='logo'/>
        </Link>
        <ul className='flex justify-center gap-x-10'>
          <li className='text-lg'>
            <Link href={'/category/Female'}>Female</Link>
          </li>
          <li className='text-lg'> 
            <Link href={'/category/Male'}>Male</Link>
          </li>

          <li className='text-lg'> 
            <Link href={'/category/Kids'}>Kids</Link>
          </li>
         
          <li className='text-lg'> 
            <Link href={'/products'}>All Products</Link>
          </li>
        </ul>
        <div className='bg-slate-50 rounded-full h-10 w-10 flex justify-center items-center'>
            <ShoppingCart className='h-6 w-6'/>
        </div>
    </div>
  )
}
export default header