import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/mainlayout'
import { Home } from './pages/home/home'
import { ProductDetail } from './pages/product-detail/productDetail'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<ProductDetail/>} />
      </Route>
    </Routes>
  )
}

export default App
