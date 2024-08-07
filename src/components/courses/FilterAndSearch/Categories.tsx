"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryField } from "@/lib/definitions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Categories = ({ categories }: { categories: CategoryField[] }) => {
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
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <Select
      onValueChange={(value) => handleSearch(value)}
      value={searchParams.get("category")?.toString()}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a course" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Courses</SelectLabel>
          <SelectItem value={"all"}>All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.category} value={category.category_id}>
              {category.category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Categories;
