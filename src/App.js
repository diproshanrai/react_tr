import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";




const App = ()=>{
    return (
        <div>
            <Header />
        </div>
    )
};

const appRender = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }
]);


const display = ReactDOM.createRoot(document.getElementById("root"));

display.render(<RouterProvider router={appRender}/>)