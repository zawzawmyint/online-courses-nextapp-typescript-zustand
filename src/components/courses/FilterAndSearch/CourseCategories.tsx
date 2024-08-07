import { fetchCategories } from "@/lib/data";
import Categories from "./Categories";
import { delay } from "@/utils/helper";

const CourseCategories = async () => {
  const categories = await fetchCategories();
  await delay();

  return <Categories categories={categories} />;
};

export default CourseCategories;
