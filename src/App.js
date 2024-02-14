import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from './Pages/Home'
import MainContextProvider from "./context/MainContext";
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
