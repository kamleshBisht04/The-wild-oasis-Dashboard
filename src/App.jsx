import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./featurs/dashboard/Dashboard";
import Cabins from "./featurs/cabins/Cabins";
import Bookings from "./featurs/bookings/Bookings";
import Checkin from "./featurs/checkin/checkin";
import Settings from "./featurs/settings/Settings";
import Users from "./featurs/users/Users";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "cabins",
        element: <Cabins />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "checkin",
        element: <Checkin />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
