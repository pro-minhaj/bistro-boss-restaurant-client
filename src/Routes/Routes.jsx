import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homes/Home/Home";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Menu from "../Pages/Menus/Menu/Menu";
import Contact from "../Pages/Contacts/Contact/Contact";
import Shop from "../Pages/Shops/Shop/Shop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProtectedLogin from "../PrivateRoute/ProtectedLogin";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'contact',
            element: <Contact />
        },
        {
            path: 'dashboard',
            element: <PrivateRoute><DashBoard /></PrivateRoute>
        },
        {
            path: 'menu',
            element: <Menu />
        },
        {
            path: 'shop/:category',
            element: <Shop />
        },
        {
          path: 'profile',
          element: <Profile />
        }
    ]
  },
  {
    path: 'login',
    element: <ProtectedLogin><Login /></ProtectedLogin>
  },
  {
    path: 'register',
    element: <ProtectedLogin><Register /></ProtectedLogin>
  },
  {
    path: '/*',
    element: <Error />
  }
]);
