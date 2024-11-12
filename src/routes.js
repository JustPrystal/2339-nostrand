import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Amenities from "./pages/Amenities";
import Residences from "./pages/Residences";
import Neighborhood from "./pages/Neighborhood";
import Availabilities from "./pages/Availabilities";
import GlobalLayout from "./layout";
import ErrorPage from "./pages/ErrorPage";
import RedirectTrailingSlash from "./RedirectTrailingSlash"; // Import the new component
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
    },
    {
        path: "/neighborhood",
        element: <Neighborhood />,
    },
    {
        path: "/availabilities",
        element: <Availabilities />,
    }
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <GlobalLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <RedirectTrailingSlash />, 
                children: routes,
            },
        ],
    },
]);

export default router;
