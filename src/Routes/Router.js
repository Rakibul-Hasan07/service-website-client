import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Home from "../Pages/Home/Home/Home";
import AllServices from "../Pages/Home/ServiceCart/AllServices/AllServices";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import Register from "../Pages/Register/Register";
import Review from "../Pages/Review/Review";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>, children: ([
            { path: '/', element: <Home></Home> },
            {
                path: '/services', element: <AllServices></AllServices>,
                loader: () => {
                    return fetch('http://localhost:5000/allservices')
                }
            },
            {
                path: '/services/:id', element: <DetailsPage></DetailsPage>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                }
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/myreview', element: <PrivateRoute><MyReview></MyReview></PrivateRoute> },
            { path: '/addservice', element: <PrivateRoute><AddService></AddService></PrivateRoute> },
            {
                path: '/review/:id', element: <PrivateRoute><Review></Review></PrivateRoute>, loader: ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                }
            },
            {path:'/blogs', element:<Blogs></Blogs>}
        ])
    },

])