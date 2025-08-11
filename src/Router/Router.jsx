
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
        path: '/jobApply/:id',
        element: <PrivetRoute><JobApply></JobApply></PrivetRoute>
      },
      {
        path: '/myapplication',
        element: <PrivetRoute><MyApplication></MyApplication></PrivetRoute>
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