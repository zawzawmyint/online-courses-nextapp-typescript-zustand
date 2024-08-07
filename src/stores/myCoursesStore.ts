import { CourseField } from "@/lib/definitions";
import { create } from "zustand";

type State = {
  myCourses: CourseField[];
};

type Actions = {
  addToMyCourses: (course: CourseField) => void;
};

export const useMyCourses = create<State & Actions>((set) => ({
  myCourses: [],
  addToMyCourses: (course: CourseField) =>
    set((state) => ({ myCourses: [...state.myCourses, course] })),
}));
