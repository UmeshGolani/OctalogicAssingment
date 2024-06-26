import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { CiSearch } from "react-icons/ci";
import { FiEdit, FiArchive, FiX } from "react-icons/fi";
import actionImg from '../assets/Vector.png'

const CourseList = ({ data }) => {
  const [search, setSearch] = useState("");  
  const [actionMenuOpen, setActionMenuOpen] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  const filteredCourses = search
    ? data.filter(course =>
        course.name.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase()) ||
        course.instrument.toLowerCase().includes(search.toLowerCase())
      )
    : data;

  const handleActionClick = (index, course) => {
    setCurrentCourse(course);
    setActionMenuOpen(actionMenuOpen === index ? null : index);
  };

  const handleEditClick = () => {
    setEditModalOpen(true);
    setActionMenuOpen(null);
  };

  const handleArchiveClick = (course) => {
    // Archive logic here
  };

  const handleCloseClick = (course) => {
    // Close logic here
  };

  return (
    <div>
      <div className="flex justify-between border-none outline-none">
        <h2 className="text-zinc-400 font-semibold leading-6 tracking-wide text-left font-sans">Course List</h2>
        <div className="flex justify-center align-middle border h-8 m-2 rounded">
          <CiSearch size={"1.75rem"} className='m-0' style={{backgroundColor:"white"}}/>
          <input 
            type="text" 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            placeholder="Search" 
            className="border-none outline-none ring-0 focus:border-none focus:outline-none focus-visible:ring-0 focus:ring-0 m-0 p-2 h-7"
          />
        </div>
      </div>
      <Table className="w-full bg-white shadow rounded">
        <TableHeader>
          <TableRow className="bg-gray-200">
            <TableHead className="p-2 text-center font-sans">Name</TableHead>
            <TableHead className="p-2 text-center font-sans">Description</TableHead>
            <TableHead className="p-2 text-center font-sans">Instructor</TableHead>
            <TableHead className="p-2 text-center font-sans">Instrument</TableHead>
            <TableHead className="p-2 text-center font-sans">Day</TableHead>
            <TableHead className="p-2 text-center font-sans">Students</TableHead>
            <TableHead className="p-2 text-center font-sans">Price</TableHead>
            <TableHead className="p-2 text-center font-sans">Status</TableHead>
            <TableHead className="p-2 text-center font-sans">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCourses.map((course, index) => (
            <TableRow key={course.name} className="border-t">
              <TableCell className="p-2 text-center font-sans">{course.name}</TableCell>
              <TableCell className="p-2 text-center font-sans">{course.description}</TableCell>
              <TableCell className="p-2 text-center font-sans">{course.instructor}</TableCell>
              <TableCell className="p-2 text-center font-sans">{course.instrument}</TableCell>
              <TableCell className="p-2 text-center font-sans">{course.day}</TableCell>
              <TableCell className="p-2 text-center font-sans">{course.students}</TableCell>
              <TableCell className="p-2 text-center font-sans">${course.price}</TableCell>
              <TableCell className="p-2 text-center font-sans">{course.status}</TableCell>
              <TableCell className="p-2 text-center font-sans relative">
                <button onClick={() => handleActionClick(index, course)}>
                <img src={actionImg} alt="" />
                </button>
                {actionMenuOpen === index && (
                  <div className="absolute right-0 w-40 bg-white shadow-md rounded p-2">
                    {course.status !== 'archived' && (
                      <button onClick={handleEditClick} className="w-full text-left p-2 hover:bg-gray-200">
                        <FiEdit className="inline mr-2"/> Edit
                      </button>
                    )}
                    <button onClick={() => handleArchiveClick(course)} className="w-full text-left p-2 hover:bg-gray-200">
                      <FiArchive className="inline mr-2"/> Archive
                    </button>
                    {course.status !== 'archived' && (
                      <button onClick={() => handleCloseClick(course)} className="w-full text-left p-2 hover:bg-gray-200">
                        <FiX className="inline mr-2"/> Close
                      </button>
                    )}
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editModalOpen && (
        <EditCourseModal 
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)} 
          course={currentCourse}
        />
      )}
    </div>
  );
};

export default CourseList;
