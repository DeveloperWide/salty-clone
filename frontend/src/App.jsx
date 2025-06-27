import { Routes, Route, Router } from "react-router-dom";
import CreateProudct from "./pages/Admin/CreateProduct";
import AdminPanel from "./pages/Admin/AdminPanel";
import AdminProducts from "./pages/Admin/AdminProducts";
import ShowProduct from "./pages/Products/ShowProduct";
import NotFound from "./pages/NotFound";
import WomansProduct from "./pages/Products/Womans-Products/WomansProduct";
import MensProduct from "./pages/Products/Mens-Accessories/MensProduct";
import logo from "./assets/logo.webp";
import alphaLogo from "./assets/saltyAlpha.avif"
import UpdateProduct from "./pages/Admin/UpdateProduct";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<WomansProduct logo={logo}/>} />
      <Route path="/pages/mens-accessories" element={<MensProduct logo={alphaLogo}/>} />
      <Route path="/products/:productId" element={<ShowProduct />} />
      <Route path="/admin/dashboard" element={<AdminPanel />}>
        {/* 👇 This will render at /admin/dashboard */}
        {/* 👇 These change inside <Outlet /> in Sidebar */}
        <Route path="new" element={<CreateProudct />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path=":productId/edit" element={<UpdateProduct />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default App;