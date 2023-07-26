import { products } from "@/components/utils/mock"
import ProductCards from "@/components/ProductCards"
import { StaticImageData } from "next/image"

const getProductsByCategory =(category: string)=>{
    return products.filter((products) => products.category === category)
};


export default function Page({ params }: { params: { slug: string } }) {
    const result =getProductsByCategory(params.slug);
    return <div className='flex justify-evenly mt-16 py-10 gap-4 flex-wrap'>
    {
         result.length > 0 ? result.map((products) =>(
        <ProductCards 
        key={products.id} 
        title={products.name}
        price={products.price}
        img={products.image}
        category={products.category}
        id={products.id}
        />
        
      )): <p>No Product Available</p>
    }
  </div>
  }