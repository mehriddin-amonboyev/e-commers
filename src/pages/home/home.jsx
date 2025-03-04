import { NewProduct } from "./components/newProduct"
import { useGetProducts } from "./service/query/useGetProduct"

export const Home = () => {
    return (
        <>
        <section className="">
            <NewProduct />
        </section>
        
        </>
    )
}