import { ChevronDown } from "lucide-react";
import { useAppDispatch } from "../redux/hooks";
import { setCategory, setSort } from "../redux/slices/Product/productsSlice";

export const Filters = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="relative">
        <select
          onChange={(e) => dispatch(setCategory(e.target.value))}
          className="
            appearance-none
            w-44
            px-4 py-2.5 pr-10
            rounded-full
            bg-white
            border border-gray-200
            shadow-sm
            text-gray-700
            focus:outline-none
            focus:ring-2 focus:ring-indigo-500
            transition-all duration-200
          "
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      {/* Sort Filter */}
      <div className="relative">
        <select
          onChange={(e) => dispatch(setSort(e.target.value as "asc" | "desc"))}
          className="
            appearance-none
            w-48
            px-4 py-2.5 pr-10
            rounded-full
            bg-white
            border border-gray-200
            shadow-sm
            text-gray-700
            focus:outline-none
            focus:ring-2 focus:ring-indigo-500
            transition-all duration-200
          "
        >
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
};
