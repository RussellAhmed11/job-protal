
import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobsDetails from "../Pages/JobsDetails/JobsDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedjob/MyPostedJob";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>Not found element</h1>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'jobs/:id',
        element: <PrivetRoute><JobsDetails></JobsDetails></PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: 'addjob/',
        element: <PrivetRoute><AddJob></AddJob></PrivetRoute>
      },
      {
        path: 'jobApply/:id',
        element: <PrivetRoute><JobApply></JobApply></PrivetRoute>
      },
      {
        path: 'myapplication',
        element: <PrivetRoute><MyApplication></MyApplication></PrivetRoute>
      },
      {
        path: 'myPostedJobs',
        element:<PrivetRoute><MyPostedJob></MyPostedJob></PrivetRoute>
      },
        {
        path: 'viewApplication/:job_id',
        element:<PrivetRoute><ViewApplications></ViewApplications></PrivetRoute>,
        loader:({params})=>fetch(`http://localhost:5000/job-application/jobs/${params.job_id}`)
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>
      }
    ]
  },
]);
export default router;