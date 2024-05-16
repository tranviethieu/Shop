import React from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import MainLayout from './layouts/MainLayout'
import Spinner from './components/Spinner'
import { ToastContainer } from 'react-toastify'

const App: React.FC = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    }
  ])
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()
  return (
    <div className='App'>
      {isFetching + isMutating !== 0 && <Spinner />}
      <ToastContainer />
      <MainLayout>{elements}</MainLayout>
    </div>
  )
}

export default App
