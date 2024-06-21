import React, { useState } from 'react';
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';

const StudentsList = ({ data }) => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Best Students</h2>
      
      
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
              <TableCell className="p-2 text-center">{student.regNo}</TableCell>
              <TableCell className="p-2 text-center">{student.firstName}</TableCell>
              <TableCell className="p-2 text-center">{student.lastName}</TableCell>
              <TableCell className="p-2 text-center">{student.courseNo}</TableCell>
              <TableCell className="p-2 text-center">${student.totalFees}</TableCell>
              <TableCell className="p-2 text-center">{student.regDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </table>
    </div>
  );
};

export default StudentsList;
