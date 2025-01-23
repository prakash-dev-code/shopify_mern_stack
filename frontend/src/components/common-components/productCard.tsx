import { FC } from "react";
import { Button, Chip, IconButton, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ProductCardProps } from "@/types/commonTypes";



const ProductCard: FC<ProductCardProps> = ({
  image,
  title,
  originalPrice,
  discountedPrice,
  discount,
  rating,
  reviews,
}) => {
  return (
    <div className="border rounded-lg shadow-md  bg-white relative group cursor-pointer">
      {/* Sale Badge */}
      <div className="absolute  left-[4px] top-[5px] bg-red-500 text-black text-xs font-bold  rounded">
      <Chip
                    label="SALE"
                    color="error"
                    className="ml-[3px] text-white text-[10px] rounded-md  bg-red"
                    variant="filled"
                    size="small"
                  />
      </div>

      {/* Product Image */}
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="h-[200px] w-[200px] object-cover rounded-md"
        />
      </div>

      {/* Action Buttons */}
      <div className="absolute top-2 right-2  flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Tooltip title="Quick View">
          <IconButton size="small" className="bg-gray-100 hover:text-white hover:bg-green">
            <VisibilityIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Compare">
          <IconButton size="small" className="bg-gray-100 hover:text-white hover:bg-green">
            <ShuffleIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add to Wishlist">
          <IconButton size="small" className="bg-gray-100 hover:text-white hover:bg-green">
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>

      {/* Product Details */}
      <div className="text-left px-2">
        <h3 className="text-sm font-semibold mb-2 max-w-[300px] text-wrap">{title}</h3>
        <div className="flex items-center justify-start text-base text-gray-500">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`${
                index < rating ? "text-[#eab308]" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
          <span className="ml-2">({reviews})</span>
        </div>
        <div className="text-sm mt-2">
          <span className="line-through text-gray-400 mr-2">
            ${originalPrice.toFixed(2)}
          </span>
          <span className="text-red-500 font-bold">${discountedPrice.toFixed(2)}</span>
          <span className="text-green font-bold ml-2">{discount}%</span>
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full px-2 mb-2">

      <Button
        variant="contained"
        className="bg-lightGray group-hover:bg-green font-bold text-sm group-hover:text-white transition-opacity duration-300 text-black mt-4 rounded-lg  w-full"
        >
        Choose options
      </Button>
          </div>
    </div>
  );
};

export default ProductCard;
