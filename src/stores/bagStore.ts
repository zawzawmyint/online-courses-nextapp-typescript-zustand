import { CourseField } from "@/lib/definitions";
import { create } from "zustand";

type State = {
  bag: CourseField | null;
};

type Actions = {
  addToBag: (course: CourseField) => void;
};

export const useBagStore = create<State & Actions>((set) => ({
  bag: null,
  addToBag: (course: CourseField) => set({ bag: course }),
}));
