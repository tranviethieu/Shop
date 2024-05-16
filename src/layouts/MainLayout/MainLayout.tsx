import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className='grid min-h-screen grid-cols-6'>
      <Header />
      <main className='col-span-3 h-full py-4 px-3'>
        <Outlet />
      </main>
    </div>
  )
}
