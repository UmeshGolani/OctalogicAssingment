import { DataProvider } from '@/context/DataContext'
import Courses from '@/pages/Courses'
import Home from '@/pages/Home'
import Students from '@/pages/Students'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <div>
        <DataProvider>
        <Routes>
            <Route path='/home' component={Home} />
            <Route path='/Courses' Component={Courses}/>
            <Route path='/students' Component={Students}/>
        </Routes>
        </DataProvider>
    </div>
  )
}

export default AllRoutes