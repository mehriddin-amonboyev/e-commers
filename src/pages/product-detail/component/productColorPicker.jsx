import { useState } from "react";
import { Checkmark } from "../../../assets/svg/checkmark";

function ProductColorPicker({ colors = ["bg-[#4f4631]", "bg-[#314f4a]", "bg-[#31344f]"], onColorSelect }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    if (onColorSelect) onColorSelect(color);
  };

  return (
    <div className="pt-[16px] flex gap-[16px]">
      {colors.map((color) => (
        <label key={color} className="cursor-pointer relative">
          <input
            type="radio"
            name="color"
            value={color}
            className="hidden"
            onChange={() => handleColorChange(color)}
            aria-label={`Tanlangan rang: ${color.replace("bg-", "")}`}
          />
          <div
            className={`w-10 h-10 rounded-full border transition transform hover:scale-110 ${
              selectedColor === color ? "border-black" : "border-transparent"
            } ${color} flex items-center justify-center`}
          >
            {selectedColor === color && (
              <span className="text-white font-bold text-lg"><Checkmark /></span>
            )}
          </div>
        </label>
      ))}
    </div>
  );
}

export default ProductColorPicker;
