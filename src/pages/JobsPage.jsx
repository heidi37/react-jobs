import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsPage = () => {
  return (
    <>
      <Outlet />
      <h1>About</h1>
    </>
  )
}

export default JobsPage
