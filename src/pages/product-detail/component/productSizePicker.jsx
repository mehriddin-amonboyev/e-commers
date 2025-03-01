import { useState } from "react";

function ProductSizePicker({ sizes = ["Small", "Medium", "Large", "X-Large"], onSizeSelect }) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    if (onSizeSelect) onSizeSelect(size);
  };

  return (
    <div className="p-4 flex space-x-4">
      {sizes.map((size) => (
        <label key={size} className="cursor-pointer relative ">
          <input
            type="radio"
            name="size"
            value={size}
            className=" hidden "
            onChange={() => handleSizeChange(size)}
            aria-label={`Tanlangan razmer: ${size}`}
          />
          <div
            className={`px-[24px] py-[12px] rounded-[62px] transition transform hover:scale-110 ${
              selectedSize === size ? "bg-[#000] text-[#fff] font-medium" : "bg-[#f0f0f0] font-normal text-[rgba(0,0,0,0.6)]"
            } flex items-center justify-center`}
          >
            {size}
          </div>
        </label>
      ))}
    </div>
  );
}

export default ProductSizePicker;