import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { CategoryField, CourseField, InstructorField } from "@/lib/definitions";

export async function fetchLatestCourses(): Promise<CourseField[]> {
  noStore();

  try {
    const data = await sql`
      SELECT *
      FROM courses
      LIMIT 5`;

    const latestCourses: CourseField[] = data.rows.map((course) => ({
      id: course.id,
      customer_id: course.customer_id,
      category_id: course.category_id,
      title: course.title,
      description: course.description,
      lessons: course.lessons,
      price: course.price,
      image_url: course.image_url,
    }));

    return latestCourses;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch latest courses");
  }
}
export async function fetchCourseById(id: string) {
  noStore();
  try {
    const data = await sql<CourseField>`
      SELECT *
      FROM courses
      WHERE id = ${id};
    `;

    const course = data.rows.map((course) => ({
      id: course.id,
      customer_id: course.customer_id,
      category_id: course.category_id,
      title: course.title,
      description: course.description,
      lessons: course.lessons,
      price: course.price,
      image_url: course.image_url,
    }));

    // console.log(instructor);
    return course[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch customer.");
  }
}

export async function fetchCourses(
  category: string,
  query: string
): Promise<CourseField[]> {
  noStore();

  try {
    let data;

    if (category && category !== "all" && query) {
      data = await sql`
        SELECT *
        FROM courses
        WHERE category_id = ${category} AND
          title ILIKE ${`%${query}%`} `;
    } else if (category && category !== "all") {
      data = await sql`
        SELECT *
        FROM courses
        WHERE category_id = ${category}`;
    } else if (query) {
      data = await sql`
        SELECT *
        FROM courses
        WHERE
          description ILIKE ${`%${query}%`} OR
          title ILIKE ${`%${query}%`} OR
          price::text ILIKE ${`%${query}%`} `;
    } else {
      data = await sql`
        SELECT *
        FROM courses`;
    }

    const courses: CourseField[] = data.rows.map((course) => ({
      id: course.id,
      customer_id: course.customer_id,
      category_id: course.category_id,
      title: course.title,
      description: course.description,
      lessons: course.lessons,
      price: course.price,
      image_url: course.image_url,
    }));

    return courses;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch courses");
  }
}

export async function fetchCategories(): Promise<CategoryField[]> {
  noStore();

  try {
    const data = await sql`
      SELECT *
      FROM category`;

    const categories: CategoryField[] = data.rows.map((category) => ({
      category_id: category.category_id,
      category: category.category,
    }));

    return categories;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch categories");
  }
}

export async function getInstructorById(id: string) {
  noStore();
  try {
    const data = await sql<InstructorField>`
      SELECT id, name, email, image_url
      FROM customers
      WHERE id = ${id};
    `;

    const instructor = data.rows.map((instru) => ({
      id: instru.id,
      name: instru.name,
      email: instru.email,
      image_url: instru.image_url,
    }));

    // console.log(instructor);
    return instructor[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch customer.");
  }
}
