import React, { createContext, useState, useEffect } from 'react';
import initialData from '../assets/data.json';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [overview, setOverview] = useState({});
  const [enrollments, setEnrollments] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data'));
    if (storedData) {
      setOverview(storedData.overview);
      setEnrollments(storedData.enrollments);
      setStudents(storedData.students);
      setCourses(storedData.courses);
    } else {
      setOverview(initialData.overview);
      setEnrollments(initialData.enrollments);
      setStudents(initialData.students);
      setCourses(initialData.courses);
    }
  }, []);

  const updateLocalStorage = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
  };

  const addCourse = (newCourse) => {
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    updateLocalStorage({ ...initialData, courses: updatedCourses });
  };

  return (
    <DataContext.Provider value={{ overview, enrollments, students, courses, addCourse }}>
      {children}
    </DataContext.Provider>
  );
};
