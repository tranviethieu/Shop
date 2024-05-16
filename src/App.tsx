import React from 'react'
import './App.css'
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import MainLayout from './layouts/MainLayout'
import Spinner from './components/Spinner'
import { ToastContainer } from 'react-toastify'
import Login from './pages/auth/Login'
import RequireAuth from './components/protected/RequireAuth'
import PublicLayout from './layouts/PublicLayout'
import Layout from './components/protected/Layout'
import SplashScreen from './components/layouts/SplashScreen'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'

const App: React.FC = () => {
  const { isLogin } = useSelector((state: RootState) => state.auth)
  if (!isLogin) {
    return (
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<PublicLayout />} /> */}
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Navigate to='/login' replace />} />
        </Route>
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* <Route index element={<PublicLayout />} /> */}
        <Route element={<RequireAuth />}>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='page1' element={<>aa</>} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
