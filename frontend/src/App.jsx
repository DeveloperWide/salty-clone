import { Routes, Route } from "react-router-dom";
import CreateProudct from "./pages/Products/CreateProduct";
import Products from "./pages/Products/Products";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/new" element={<CreateProudct />} />
    </Routes>
  )
}

export default App;