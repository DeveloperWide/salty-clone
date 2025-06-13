import { Routes, Route, Router } from "react-router-dom";
import CreateProudct from "./pages/Products/CreateProduct";
import Products from "./pages/Products/Products";
import AdminPanel from "./pages/Admin/AdminPanel";
import AdminProducts from "./pages/Admin/AdminProducts";
import Navbar from "./layouts/Navbar";


function App() {
  return (
    <>
    <Navbar />
     <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/admin/dashboard" element={<AdminPanel />}>
        {/* 👇 This will render at /admin/dashboard */}
        {/* 👇 These change inside <Outlet /> in Sidebar */}
        <Route path="new" element={<CreateProudct />} />
        <Route path="products" element={<AdminProducts />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;