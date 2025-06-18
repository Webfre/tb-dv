import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessCourseUser } from "../api/userApi";
import { RootState } from "./store";

interface AccessState {
  courses: AccessCourseUser[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AccessState = {
  courses: [],
  isLoading: false,
  error: null,
};

export const accessSlice = createSlice({
  name: "access",
  initialState,
  reducers: {
    setAccessCourses: (state, action: PayloadAction<AccessCourseUser[]>) => {
      state.courses = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setAccessLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAccessError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setAccessCourses, setAccessLoading, setAccessError } =
  accessSlice.actions;

export const selectAllAccessCourses = (state: RootState) =>
  state.access.courses;

export const selectIsAccessLoading = (state: RootState) =>
  state.access.isLoading;

export const selectAccessError = (state: RootState) => state.access.error;

export const selectIsProByCourseId = (
  state: RootState,
  courseId: number | string
): boolean => {
  const course = state.access.courses.find(
    (course) => course.id === Number(courseId)
  );

  return course?.isPro ?? false;
};

export default accessSlice.reducer;
