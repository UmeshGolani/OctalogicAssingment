import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import StudentsList from '../components/StudentList';

const Students = () => {
  const { students } = useContext(DataContext);

  return (
    <div className="space-y-8">
      <StudentsList data={students} />
    </div>
  );
};

export default Students;
