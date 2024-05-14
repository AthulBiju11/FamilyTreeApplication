import React, { Component, useEffect } from 'react';
import FamilyTree from './mytree';
import { useDispatch,useSelector } from 'react-redux';
import { fetchFamilyMembers } from './redux/slice/family';
import LandingPage from './pages/LandingPage/LandingPage';
import AdminPage from './pages/AdminPage/AdminPage';

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
    </div>
  );
}

export default App;