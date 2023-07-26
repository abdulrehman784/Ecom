import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
function ProductCards(props:{  
    title: string
    price: number
    img:StaticImageData
    category:string
    id:number
    }) {
  return (
    <Link href={`/products/${props.id}`}>
    <div className='py-3'>
    <Image className='rounded-xl' src={props.img} alt='Products'/>
    <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
    <p className='font-bold text-lg'>${props.price}</p>
    <p className='font-bold text-lg'>category {""}
    <span className='text-base font-normal capitalize'>{props.category}</span>
    </p>
    <Button className='bg-black text-white rounded-xl'>Add to Cart</Button>
    </div>
    </Link>
  )
}

export default ProductCards