import { useGetProductsQuery } from "../redux/services/productsApi";
import { useAppSelector } from "../redux/hooks";
import { ProductCard } from "../components/ProductCard";

export default function FavoritesPage() {
  const { data = [] } = useGetProductsQuery();
  const favorites = useAppSelector((s) => s.favorites);

  const favProducts = data.filter((p) => favorites.includes(p.id));

  if (!favProducts.length) {
    return <p className="text-center">No favorites yet</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {favProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
