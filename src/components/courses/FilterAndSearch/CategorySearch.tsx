"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const CategorySearch = ({
  category,
  children,
}: {
  category: string;
  children: React.ReactNode;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("category", term);
    } else {
      params.delete("category");
    }
    const newPathname = pathname.startsWith("courses") ? pathname : "/courses";
    replace(`${newPathname}?${params.toString()}`);
  }

  return (
    <div
      className="cursor-pointer"
      onClick={(e) => {
        handleSearch(category);
      }}
    >
      {children}
    </div>
  );
};

export default CategorySearch;
