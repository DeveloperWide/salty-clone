import { Routes, Route, Router } from "react-router-dom";
import CreateProudct from "./pages/Products/CreateProduct";
import Products from "./pages/Products/Products";
import AdminPanel from "./pages/Admin/AdminPanel";
import AdminProducts from "./pages/Admin/AdminProducts";
import ShowProduct from "./pages/Products/ShowProduct";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products/:productId" element={<ShowProduct />} />
      <Route path="/admin/dashboard" element={<AdminPanel />}>
        {/* 👇 This will render at /admin/dashboard */}
        {/* 👇 These change inside <Outlet /> in Sidebar */}
        <Route path="new" element={<CreateProudct />} />
        <Route path="products" element={<AdminProducts />} />
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default App;