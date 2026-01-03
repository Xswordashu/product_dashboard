import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setSearch } from "../redux/slices/Product/productsSlice";
import { Search } from "lucide-react";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearch(value));
    }, 400);

    return () => clearTimeout(timer);
  }, [value, dispatch]);

  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="
          w-full pl-11 pr-4 py-3
          rounded-full
          bg-white
          border border-gray-200
          shadow-sm
          text-gray-700
          placeholder-gray-400
          focus:outline-none
          focus:ring-2 focus:ring-indigo-500
          focus:border-indigo-500
          transition-all duration-200
        "
      />
    </div>
  );
};
