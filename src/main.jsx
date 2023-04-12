import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import AppliedJobs from './components/AppliedJobs'
import Blog from './components/Blog'
import {catagoriesAndJobsData, jobDetails } from './utils/loader'
import JobDetails from './components/JobDetails'
import { Toaster } from 'react-hot-toast';
import Statistics from './components/Statistics'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: catagoriesAndJobsData,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: catagoriesAndJobsData
      },
      {
        path: '/statistics',
        element: <Statistics/>
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs />,
        loader: catagoriesAndJobsData
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: jobDetails
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Toaster />
      <RouterProvider router={router} /> 
    </ChakraProvider>
  </React.StrictMode>,
)
