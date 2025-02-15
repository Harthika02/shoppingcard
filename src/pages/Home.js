import { Productcard } from "../components/Productcard"

export const Home = () => {
  const products=[
    {"id": 1, "name":"Philips Audio Upbeat Tauh201 Wired On Ear Headphones with mic","price":1199,"image":"/assets/img1.jpeg"},
    {"id": 2, "name":"Zebronics Zeb-200HM Wired in Ear Headphone with Mic","price":415,"image":"/assets/img2.jpeg"},
    {"id": 3, "name":"HP B4B09PA On Ear Wired Headphones with Mic","price":749,"image":"/assets/img3.jpeg"},
    {"id": 4, "name":"Zebronics Zeb Jet Pro Over-Ear Wired Headphones","price":799,"image":"/assets/img4.jpeg"},
    {"id": 5, "name":"Zebronics Zeb-Storm Wired On Ear Headphone","price":499,"image":"/assets/img5.jpeg"},
    {"id": 6, "name":"Zebronics Zeb-Supreme USB Wired Headphone","price":899,"image":"/assets/img6.jpeg"}
  ]
  return (
    <div >
        <section className="Product">
          {products.map((product) => (
          <Productcard key={product.id} product={product} />

          ))}
            
        </section>
    </div>
  )
}
