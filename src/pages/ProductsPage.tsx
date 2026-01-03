import { useGetProductsQuery } from "../redux/services/productsApi";
import { ProductCard } from "../components/ProductCard";
import { useAppSelector } from "../redux/hooks";
import { filteredProductsSelector } from "../redux/selectors/selectors";
import { SearchBar } from "../components/SearchBar";
import { Filters } from "../components/Filters";
import { Search } from "lucide-react";
import { Loader } from "../components/Loader";

export default function ProductsPage() {
  const { isLoading } = useGetProductsQuery();
  const products = useAppSelector(filteredProductsSelector);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size={50} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Shop Collection
          </h1>
          <p className="text-gray-600">
            Discover our curated selection of premium products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchBar />
            </div>
            <div className="relative">
              <Filters />
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-600 font-medium">
              {products?.length}{" "}
              {products?.length === 1 ? "product" : "products"} found
            </span>
          </div>
        </div>
        {products?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
