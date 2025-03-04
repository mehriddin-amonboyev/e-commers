import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductColorPicker from "./productColorPicker";
import ProductSizePicker from "./productSizePicker";
import { addProductList } from "../../../store/slices/cartSlice";
import { MinusIcon } from "../../../assets/svg/minusIcon";
import { PlusIcon } from "../../../assets/svg/plusIcon";

export const Detail = ({product}) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addProductList(product))
    }

    return (
        <>
            <div className="my-[24px] border border-[rgba(0,0,0,0.1)] w-[1240px]"></div>

            <section className="pt-[82px] flex gap-[40px]">
                <div className="flex gap-[14px]">
                    <div className="flex flex-col gap-[14px]">
                        <img className="w-[152px] h-[167px] rounded-[20px] border border-[#000]" src={product.image} alt="" />
                        <img className="w-[152px] h-[167px] rounded-[20px]" src={product.image} alt="" />
                        <img className="w-[152px] h-[167px] rounded-[20px]" src={product.image} alt="" />
                    </div>
                    <div className="w-[444px] h-[530px] rounded-[20px] overflow-hidden">
                        <img className="h-full overflow-cover" src={product.image} alt="" />
                    </div>
                </div>
                <div className="w-[50%]">
                    <h2 className="font-bold text-[40px] text-[#000]">{product.title}</h2>
                    {/* <p>{product.rating.rate}</p> */}
                    <div className="font-bold text-[32px] text-[#000] pt-[14px]">
                        {product.discount ? (
                            <div className="flex gap-[12px] items-center">
                                ${product.price * (100 - product.discount) / 100}
                                <del className="font-bold text-[32px] line-through text-[rgba(0,0,0,0.4)] ">
                                    %{product.price}
                                </del>
                                <div className="font-medium text-base text-[#f33] bg-[rgba(255,51,51,0.1)] rounded-[62px] py-[6px] px-[14px]">
                                    -{product.discount}%
                                </div>
                            </div>
                        ) : (
                            <div>
                                ${product.price}
                            </div>
                        )}
                    </div>
                    <p className="pt-[20px] font-normal text-base leading-[137%] text-[rgba(0,0,0,0.6)]">{product.description}</p>
                    <div className="mt-[24px] border border-[rgba(0,0,0,0.1)] w-[590px]"></div>
                    <h4 className="pt-[24px] font-normal text-base text-[rgba(0,0,0,0.6)]">Select Colors</h4>
                    <ProductColorPicker />
                    <div className="mt-[24px] border border-[rgba(0,0,0,0.1)] w-[590px]"></div>
                    <h4 className="pt-[24px] font-normal text-base text-[rgba(0,0,0,0.6)]">Choose Size</h4>
                    <ProductSizePicker />
                    <div className="mt-[24px] border border-[rgba(0,0,0,0.1)] w-[590px]"></div>
                    <div className="flex gap-[20px]">
                        <div className="flex gap-[38px] py-[16px] px-[20px] bg-[#f0f0f0] rounded-[62px]">
                            <button ><MinusIcon /></button>
                            <h2 >1</h2>
                            <button ><PlusIcon /></button>
                        </div>
                        <button onClick={() => addToCart(addProductList())} className="py-[16px] px-[54px] w-full bg-[#000] rounded-[62px]">
                            <span className="font-medium text-base text-[#fff]">
                                Add to Cart
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}