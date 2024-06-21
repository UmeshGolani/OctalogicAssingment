import React from 'react';
import CardComponent from './CardComponent';
// import { Card } from './ui/card';


const Overview = ({ data }) => {
  return (
    <div className="block ">
      <h1>Overview</h1>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-1">
      <CardComponent info={data.totalStudents} description="Total Students" link={"#"}/>
      <CardComponent info={data.totalCourses} description="Total Courses" link="#" />
      <CardComponent info={"$"+data.totalEarnings} description="Total Earnings" link="#" />
      <CardComponent info={data.bestCourse} description="Best Course" link="#" />
      <CardComponent info={data.worstCourse} description="worst Course" link="#"/>     
    </div>
    </div>
  );
};

export default Overview;
