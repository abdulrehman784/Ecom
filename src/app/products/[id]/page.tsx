import { products } from "@/components/utils/mock"
import  Image  from "next/image";
import { StaticImageData } from "next/image"

const getProductsDetail =(id:number | string)=>{
    return products.filter((products) => products.id == id)
};


export default function Page({ params }: { params: { id:string } }) {
    const result =getProductsDetail(params.id);
    return <div className='flex mt-16 py-10 gap-4 flex-wrap'>
    {
        result.map((products) =>(
        <div key={products.id} className="flex justify-between gap-6">
          {/* Left */}
          <div>
            <Image src={products.image} alt={products.name}/>
          </div>
          {/* Right */}
          <div>
            <div>
              <h1 className="text-2xl">{products.name}</h1>
            <h2 className="text-base text-gray-400 font-semibold">{products.tagline}</h2>
            </div>
            <div>
              <h3 className="text-xs font-semibold mt-6">SELECT SIZE</h3>
            </div>
          </div>
        </div>
        
      ))
    }
      
  </div>
  }