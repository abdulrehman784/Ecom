import { StaticImageData } from "next/image";

export type Products = {
    category: string;
    id:number;
    tagline:String
    name:string;
    price:number;
    image:StaticImageData
    
};