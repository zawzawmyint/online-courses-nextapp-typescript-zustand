import { CourseField } from "@/lib/definitions";
import { create } from "zustand";

type State = {
  myCourses: MyCoursesField[];
};

type MyCoursesField = {
  id: string;
  customer_id: string;
  category_id: string;
  title: string;
  description: string;
  lessons: string[];
  price: string;
  image_url: string;
  user_email?: string | null | undefined;
};

type Actions = {
  addToMyCourses: (course: MyCoursesField) => void;
};

export const useMyCourses = create<State & Actions>((set) => ({
  myCourses: [],
  addToMyCourses: (course: MyCoursesField) =>
    set((state) => ({ myCourses: [...state.myCourses, course] })),
}));
