import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/toaster";
import SchedulingCalendar from "./pages/SchedulingCalendar";
import Appointment from "./pages/Appointment";
import ProfileForm from "./pages/ProfileForm";

interface AppProps {
  children: React.ReactNode;
}

const App = () => {
  const Layout = ({ children }: AppProps) => {
    return (
      <div className="flex flex-col max-w-full mx-auto overflow-hidden">

        {/* <Navbar /> */}
        <div className="relative flex-1 w-full pt-4 mx-8">{children}</div>
        <Toaster />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/calendar",
      element: (
        <Layout>
          <SchedulingCalendar />
        </Layout>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/appointment",
      element: (
        <Layout>
          <Appointment />
        </Layout>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/appointment123",
      element: (
        <Layout>
          <ProfileForm />
        </Layout>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
