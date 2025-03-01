import { Link } from "react-router-dom"
import { productData } from "../../../data"

export const NewProduct = () => {
    return (
        <div className="container">
            <h2>NEW ARRIVALS</h2>
            <div className="flex gap-[20px]">
                {productData.map((item) =>
                    item.id < 5 ? (
                        <div key={item.id}>
                            <Link
                                to={`/product/${item.id}`}>
                                <div className="">
                                    <div className="max-w-[295px] max-h-[298px] rounded-[20px] bg-[#f0eeed] overflow-auto">
                                        <img className="w-full" src={item.image} alt="product img" />
                                    </div>
                                    <h3 className="pt-[16px] font-bold text-xl text-[#000]">{item.name}</h3>
                                    <h3 className="py-[8px]">{item.rating}</h3>
                                    <div className="font-bold text-2xl text-[#000]">
                                        {item.discount ? (
                                            <div className="flex gap-[10px] items-center">
                                                ${item.price * (100 - item.discount) / 100}
                                                <del className="font-bold text-2xl line-through text-[rgba(0,0,0,0.4)] ">
                                                    %{item.price}
                                                </del>
                                                <div className="font-medium text-xs text-[#f33] bg-[rgba(255,51,51,0.1)] rounded-[62px] py-[6px] px-[14px]">
                                                    -{item.discount}%
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                ${item.price}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    )
}