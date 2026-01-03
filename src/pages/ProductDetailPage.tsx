import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/services/productsApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleFavorite } from "../redux/slices/Favorite/favoriteSlice";
import { Loader } from "../components/Loader";
import { Heart } from "lucide-react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(Number(id));
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((s) => s.favorites);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size={50} />
      </div>
    );
  }
  if (!data) return null;

  const isFav = favorites.includes(data.id);

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Image Section */}
            <div className="relative group">
              <div className="aspect-square bg-linear-to-br from-slate-100 to-slate-50 rounded-2xl p-8 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-xl">
                <img
                  src={data.image}
                  alt={data.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute top-4 right-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                In Stock
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                    {data.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  {data.title}
                </h1>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {data.description}
                </p>
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ${data.price}
                  </span>
                </div>

                <div className="flex gap-3 mb-8">
                  <button
                    onClick={() => dispatch(toggleFavorite(data.id))}
                    className={`p-4 rounded-xl  transition-all duration-300 hover:scale-105 ${
                      isFav
                        ? "bg-red-50 border-red-500 text-red-500"
                        : "bg-white border-slate-300 text-slate-400 hover:border-red-500 hover:text-red-500"
                    }`}
                  >
                    <Heart
                      className={`w-6 h-6 ${isFav ? "fill-current" : ""}`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
