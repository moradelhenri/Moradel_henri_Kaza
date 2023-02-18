import "./styles.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//import Header from "./components/Header";

import Home from "./pages/Home";
import Fiche from "./pages/Fiche";
import About from "./pages/About";

import RootLayout from "./layouts/RootLayout";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="fiche" element={<Fiche />} />
        <Route path="About" element={<About />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
