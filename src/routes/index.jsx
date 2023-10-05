import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import Explore from "../pages/explore";
import Notification from "../pages/notification";
import NotFound from "../pages/notfound";
import MainLayout from "../layouts/main";

 const routes = createBrowserRouter([
   
    {
        path:'/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path:'explore',
                element: <Explore/> 
            },
            {
                path:'notifications',
                element: <Notification/>    
            }, 
            {
                path: '*',
                element:<NotFound/>
            }             
        ]
    },

])

export default routes