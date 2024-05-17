import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import AdminPage from './pages/AdminPage/AdminPage';
import { ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {

  
  const Layout = () => {
    return (
      <div className="app">
        
            <Outlet />
            
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/admin",
          element: <AdminPage />,
        },
        
        
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  );
}

export default App;