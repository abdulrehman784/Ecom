import Header from "@/components/layout/Header"
import Hero from "@/views/Hero"
import Productlist from "@/views/Productlist"

export default function Home() {
  return (
    <div>
      <Hero/>
      {/* Products */}
      <Productlist/>
    </div>
  )
}
