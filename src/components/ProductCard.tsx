import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleFavorite } from "../redux/slices/Favorite/favoriteSlice";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((s: any) => s.favorites);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isFav = favorites.includes(product.id);

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
        <div className="relative overflow-hidden bg-gray-50 aspect-square">
          <img
            src={product.image}
            alt={product.title}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <button
            onClick={() => dispatch(toggleFavorite(product.id))}
            className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-200 hover:scale-110"
          >
            <Heart
              size={18}
              className={`${
                isFav ? "fill-red-500 text-red-500" : "text-gray-600"
              } transition-colors`}
            />
          </button>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 min-h-10 group-hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            <button className="bg-black text-white rounded-md px-2.5 py-1.25">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
