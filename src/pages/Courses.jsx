import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import CourseList from '../components/CourseList';
import AddCourses from '../components/AddCourses';

const Courses = () => {
  const { courses, addCourse, setStatusViews } = useContext(DataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCourse = (newCourse) => {
    addCourse(newCourse);
    setIsModalOpen(false); // Close modal after adding course
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold font-sans">Courses</h1>
      </div>
      <CourseList data={courses} />
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded font-sans"
      >
        Add Course
      </button>
      {isModalOpen && (
        <AddCourses 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} 
          onAddCourse={handleAddCourse} 
        />
      )}
    </div>
  );
};

export default Courses;
