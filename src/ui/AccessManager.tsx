import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCheckCourseAccessQuery } from "../api/userApi";
import { useDispatch } from "react-redux";
import {
  setAccessCourses,
  setAccessLoading,
  setAccessError,
} from "../store/accessSlice";

export const AccessManager = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { data, isLoading, error, refetch } = useCheckCourseAccessQuery();

  useEffect(() => {
    dispatch(setAccessLoading(isLoading));
  }, [isLoading, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(setAccessError("Ошибка загрузки данных доступа"));
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (data?.accessCourse) {
      dispatch(setAccessCourses(data.accessCourse));
    }
  }, [data, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      refetch();
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname, refetch]);

  return null;
};
