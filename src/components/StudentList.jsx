import React, { useState } from 'react';
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';
import { Link } from 'react-router-dom';

const StudentsList = ({ data }) => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="flex justify-between">
      <h2 className="text-xl font-bold mb-4 text-zinc-400">Best Students</h2>
      <Link to='/courses'>View All Courses</Link>
      </div>
      
      <table className="w-full bg-white shadow rounded">
        <TableHeader>
          <TableRow className="bg-gray-200">
            <TableHead className="p-2 text-center">Reg. No</TableHead>
            <TableHead className="p-2 text-center">First Name</TableHead>
            <TableHead className="p-2 text-center">Last Name</TableHead>
            <TableHead className="p-2 text-center">Course #</TableHead>
            <TableHead className="p-2 text-center">Total Fees</TableHead>
            <TableHead className="p-2 text-center">Reg. Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(student => (
            <TableRow key={student.regNo} className="border-t">
              <TableCell className="p-2 text-center font-sans">{student.regNo}</TableCell>
              <TableCell className="p-2 text-center font-sans">{student.firstName}</TableCell>
              <TableCell className="p-2 text-center font-sans">{student.lastName}</TableCell>
              <TableCell className="p-2 text-center font-sans">{student.courseNo}</TableCell>
              <TableCell className="p-2 text-center font-sans">${student.totalFees}</TableCell>
              <TableCell className="p-2 text-center font-sans">{student.regDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </table>
    </div>
  );
};

export default StudentsList;
