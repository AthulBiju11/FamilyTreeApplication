import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import AdminPage from './pages/AdminPage/AdminPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UpdateFamilyMember from './pages/UpdatePage/UpdateFamilyMember';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider, useAuth } from './context/AuthContext';
import "./App.css"

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Outlet />
      </div>
    );
  };

  const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? element : <Navigate to="/login" />;
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
          element: <ProtectedRoute element={<AdminPage />} />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        // Add a new route for UpdateFamilyMember
        {
          path: "/update-family-member",
          element: <ProtectedRoute element={<UpdateFamilyMember />} />, // Decide if it should be protected or not
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
