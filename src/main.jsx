import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import Tickets from './pages/Tickets.jsx'
import ThemeContextProvider from './hooks/useTheme.jsx'


const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/tickets',
        element: <Tickets />,
      }
    
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeContextProvider> */}
      <RouterProvider router={router} />
    {/* </ThemeContextProvider> */}
  </StrictMode>,
)
