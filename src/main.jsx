import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import AppliedJobs from './components/AppliedJobs'
import Blog from './components/Blog'
import {catagoriesAndJobsData } from './utils/loader'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: catagoriesAndJobsData
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs/>
      },
      {
        path: '/blog',
        element: <Blog/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
