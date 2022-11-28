import HomePage from './pages/HomePage/HomePage'
import CartPage from './pages/CartPage/CartPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import './assets/css/reset.css'
import './app.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/TIL/projects/shoppingmall_react/' element={<HomePage />}/>
        <Route path='/TIL/projects/shoppingmall_react/cart' element={<CartPage />}/>
        <Route path='/TIL/projects/shoppingmall_react/product/:id' element={<ProductDetailPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
