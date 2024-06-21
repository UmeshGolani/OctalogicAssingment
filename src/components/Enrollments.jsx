import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const Enrollments = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Latest Enrollments</h2>
      <Table className="w-full bg-white shadow rounded">
        <TableHeader>
          <TableRow className="bg-gray-200">
            <TableHead className="p-2 text-center">Enr. No</TableHead>
            <TableHead className="p-2 text-center">Name</TableHead>
            <TableHead className="p-2 text-center">Course</TableHead>
            <TableHead className="p-2 text-center">Fees</TableHead>
            <TableHead className="p-2 text-center">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(enrollment => (
            <TableRow key={enrollment.enrNo} className="border-t text-center">
              <TableCell className="p-2 text-center">{enrollment.enrNo}</TableCell>
              <TableCell className="p-2 text-center">{enrollment.name}</TableCell>
              <TableCell className="p-2 text-center">{enrollment.course}</TableCell>
              <TableCell className="p-2 text-center">${enrollment.fees}</TableCell>
              <TableCell className="p-2 text-center">{enrollment.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Enrollments;
