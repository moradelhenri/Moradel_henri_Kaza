import "./styles.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/Home";
import Fiche from "./pages/Fiche";
import About from "./pages/About";

import RootLayout from "./layouts/RootLayout";
import Page404 from "./pages/Page404";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="fiche/:id" element={<Fiche />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
