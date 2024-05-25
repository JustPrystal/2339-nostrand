
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Amenities from "./pages/Amenities";
import Residences from "./pages/Residences";
import GlobalLayout from "./layout";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";


const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/residences",
        element: <Residences />,
    },
    {
        path: "/amenities",
        element: <Amenities />,
    },
    {
        path: "/contact",
        element: <Contact />,
    }
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <GlobalLayout />,
        errorElement: <ErrorPage />,
        children: routes 
    },
   
]);


export default router;

