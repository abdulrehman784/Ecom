import { products } from "@/components/utils/mock";
import ProductCards from "@/components/ProductCards";

const AllProducts=()=>{
    return (
    <div className='flex justify-evenly mt-16 py-10 gap-4 flex-wrap'>
    {
      products.map((products) =>(
        <ProductCards 
        key={products.id} 
        title={products.name}
        price={products.price}
        img={products.image}
        category={products.category}
        id={products.id}
        />
        
      ))
    }
  </div>
)};
export default AllProducts;