import { Link } from "react-router-dom"
import { productData } from "../../../data"
import { useGetProducts } from "../service/query/useGetProduct"

export const NewProduct = () => {
    const { data, isLoading } = useGetProducts();
    return (
        <div className="container">
            <h2>NEW ARRIVALS</h2>
            {isLoading ? "Loading..." :
                <div className="flex gap-[20px] flex-wrap">
                    {data?.map((item) => item.id ? (
                        <div key={item.id}>
                            <Link to={`/product-detail/${item.id}`}>
                                <div className="w-[295px] p-0">
                                    <div className="max-w-[295px] rounded-[20px] bg-[#f0eeed] overflow-hidden">
                                        <img className="w-full h-[298px]" src={item.image} alt="product img" />
                                    </div>
                                    <h3 className=" pt-[16px] font-bold text-xl text-[#000]">{item.title}</h3>
                                    <h3 className="py-[8px]">{item.rating.rate}</h3>
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
            }
        </div>
    )
}