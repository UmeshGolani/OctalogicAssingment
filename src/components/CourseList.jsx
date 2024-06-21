import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { CiSearch } from "react-icons/ci";

const CourseList = ({ data }) => {
  const [search, setSearch] = useState("");

  const filteredCourses = search
    ? data.filter(course =>
        course.name.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase()) ||
        course.instrument.toLowerCase().includes(search.toLowerCase())
      )
    : data;

  return (
    <div>
      <div className="flex justify-between border-none outline-none">
        <h2 className="text-white font-semibold leading-6 tracking-wide text-left font-sans">Course List</h2>
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
            <TableHead className="p-2 text-center">Name</TableHead>
            <TableHead className="p-2 text-center">Description</TableHead>
            <TableHead className="p-2 text-center">Instructor</TableHead>
            <TableHead className="p-2 text-center">Instrument</TableHead>
            <TableHead className="p-2 text-center">Day</TableHead>
            <TableHead className="p-2 text-center">Students</TableHead>
            <TableHead className="p-2 text-center">Price</TableHead>
            <TableHead className="p-2 text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCourses.map(course => (
            <TableRow key={course.name} className="border-t">
              <TableCell className="p-2 text-center">{course.name}</TableCell>
              <TableCell className="p-2 text-center">{course.description}</TableCell>
              <TableCell className="p-2 text-center">{course.instructor}</TableCell>
              <TableCell className="p-2 text-center">{course.instrument}</TableCell>
              <TableCell className="p-2 text-center">{course.day}</TableCell>
              <TableCell className="p-2 text-center">{course.students}</TableCell>
              <TableCell className="p-2 text-center">${course.price}</TableCell>
              <TableCell className="p-2 text-center">{course.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseList;
