import { useSelector } from "react-redux"
import { CartProduct } from "./components/cartProduct";

export const Cart = () => {
    const { products } = useSelector((state) => state.product);

    return (
        <div className="container">
            <h2 className="font-bold text-[40px] text-[#000]">YOU CART</h2>
            <div  className="max-w-[715px] py-[20px] px-[24px] rounded-[20px] border border-[rgba(0,0,0,0.1)]">
                {products.map((item) =>(
                    <CartProduct key={item.id} {...item} />
                ))}
                
            </div>
        </div>
    )
}