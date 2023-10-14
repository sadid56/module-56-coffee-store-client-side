import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../Home/Home";
import AddCoffee from "../pages/AddCoffee";
import Updatecoffe from "../pages/UpdateCoffe";
import Coffees from "../pages/Coffees";

const Routers = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/coffee')
            },
            {
                path: '/coffees',
                element: <Coffees></Coffees>
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updateCoffee/:id',
                element: <Updatecoffe></Updatecoffe>,
                loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    }
])
 
export default Routers;