import { DeleteIcon } from "../../../assets/svg/deleteIcon"
import { MinusIcon } from "../../../assets/svg/minusIcon"
import { PlusIcon } from "../../../assets/svg/plusIcon"

export const CartProduct = (product) => {
    return (
        <>
            <div className="flex gap-[16px]">
                <div className="w-[124px] ">
                    <img className="w-full rounded-[9px]" src={product.image} alt="img" />
                </div>
                <div className="flex justify-between w-full">
                    <div>
                        <h2 className="font-bold text-[20px] text-[#000]">{product.title}</h2>
                        {/* <p className="font-normal text-[14px] text-[#000]">
                            Size:
                            <span className="text-[rgba(0,0,0,0.6)]">{product.size[3]}</span>
                        </p>
                        <p className="font-normal text-[14px] text-[#000]">
                            Color:
                            <span className="text-[rgba(0,0,0,0.6)]">{product.color[2]}</span>
                        </p> */}
                        <p className="font-bold text-[20px] text-[#000]">${product.price}</p>
                    </div>
                    <div className="relative">
                        <div className="absolute top-0 right-0">
                            <DeleteIcon />
                        </div>
                        <div className="absolute bottom-0 right-0 flex gap-[20px] py-[12px] px-[20px] bg-[#f0f0f0] rounded-[62px]">
                            <button ><MinusIcon /></button>
                            <h2 >1</h2>
                            <button ><PlusIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-[24px] border border-[rgba(0,0,0,0.1)] w-full"></div>
        </>
    )
}