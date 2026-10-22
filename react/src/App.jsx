
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Services from './Pages/Services'
import NotFound from './Pages/NotFound'
import Careers from './Pages/Careers'
import CareerDetails from './Pages/CareerDetails'
import Contact from './Pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'careers',
        element: <Careers />
      },
      {
        path: 'careerDetails',
        element: <CareerDetails />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
