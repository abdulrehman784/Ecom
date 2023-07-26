import React from 'react'
import P1 from '/public/p1.png'
import Image from 'next/image'
import ProductCards from '@/components/ProductCards'
import P2 from '/public/p2.png'
import { Slice } from 'lucide-react'
import { products } from '@/components/utils/mock'

function Productlist() {
  const Productchecks = products.slice(0,3)
  return (
    <div className='flex justify-evenly mt-16 py-10'>
      {
        Productchecks.map((products) =>(
          <ProductCards key={products.id} 
          title={products.name}
          price={products.price}
          img={products.image}
          category={products.category}
          id={products.id}/>
          
        ))
      }
    </div>
    
  
  )}
export default Productlist