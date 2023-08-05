import { BrowserRouter, Routes, Route, Outlet,  } from "react-router-dom";

import Fiche from "../pages/Fiche";

import Page404 from "../pages/Page404";

import Home from "../pages/Home";
import About from "../pages/About";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

function RootLayout() {

  const Layout = () => {
    return (
      
      <>
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
      </>
    );
  };

  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
    
   
     
        <Routes>
          <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} /> 
             <Route path="Moradel_henri_kaza?/" element={<Home />} />            
            <Route path="/fiche/:id" element={<Fiche />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  return <BrowserRoutes />;
}

export default RootLayout;
