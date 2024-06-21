import React, { createContext, useState, useEffect } from 'react';
import data from '../assets/data.json';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [overview, setOverview] = useState({});
  const [enrollments, setEnrollments] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setOverview(data.overview);
    setEnrollments(data.enrollments);
    setStudents(data.students);
    setCourses(data.courses);
    localStorage.setItem('data', JSON.stringify(data))
  }, []);

  return (
    <DataContext.Provider value={{ overview, enrollments, students, courses }}>
      {children}
    </DataContext.Provider>
  );
};
