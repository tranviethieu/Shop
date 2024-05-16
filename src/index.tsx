import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider, useIsFetching, useIsMutating } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { ToastContainer } from 'react-toastify'
import SplashScreen from './components/layouts/SplashScreen'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <SplashScreen />
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer autoClose={3000} />
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
