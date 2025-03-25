
import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from '../Pages/HomePage'
import ProjectsPage from '../Pages/ProjectsPage'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import PrivateRoute from '../Pages/PrivateRoute'
import AddProjects from '../Pages/AddProjects'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/home" />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/skills' element={<ProjectsPage />} />
      <Route path='/login' element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add-project" element={<AddProjects />} />
      </Route>
    </Routes>
  )
}

export default Routers
