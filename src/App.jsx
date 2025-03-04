import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/mainlayout'
import { Home } from './pages/home/home'
import { ProductDetail } from './pages/product-detail/productDetail'
import { Cart } from './pages/Cart/cart'
import { CreateProduct } from './pages/createProduct/createProduct'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="product-detail/:id" element={<ProductDetail />} />
        <Route path='cart' element={<Cart />} />
        <Route path='add' element={<CreateProduct />} />
      </Route>
    </Routes>
  )
}

export default App;