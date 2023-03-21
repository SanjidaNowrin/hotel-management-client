import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddRoom from "./Pages/AddRoom/AddRoom";
import "./App.css";
import Details from "./Pages/Details/Details";
import AllBooking from "./Pages/AllBooking/AllBooking";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/addRoom",
      element: <AddRoom />,
    },
    {
      path: "/room/:id",
      element: <Details />,
    },
    {
      path: "/all_booking",
      element: <AllBooking />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
