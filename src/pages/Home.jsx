import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Overview from '../components/Overview';
import Enrollments from '../components/Enrollments';
import StudentsList from '../components/StudentList';

const Home = () => {
  const { overview, enrollments, students } = useContext(DataContext);

  return (
    <div className="space-y-8">
      <Overview data={overview} />
      <Enrollments data={enrollments} />
      <StudentsList data={students} />
    </div>
  );
};

export default Home;
