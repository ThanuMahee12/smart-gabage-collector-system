import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from './Pages/Home'
import MainContextProvider from "./context/MainContext";
import DustbinsDetails from "./Pages/DustbinDetails";
import Location from "./Pages/Location";
const Layout = () =>
{
  return (
    <>
    <Header />
      <Outlet />
      </>
  )
}
const router = createBrowserRouter( [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Home/>
      }, {
        path: "/dustbin",
        element:<DustbinsDetails/>
      }, {
        path: "/location",
        element:<Location/>
      }
    ]
}])

function App() {
  return (
    <MainContextProvider>
   <RouterProvider router={router}/>
    </MainContextProvider>

  );
}

export default App;
