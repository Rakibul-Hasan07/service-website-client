import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Home from "../Pages/Home/Home/Home";
import AllServices from "../Pages/Home/ServiceCart/AllServices/AllServices";


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
            }
        ])
    },

])