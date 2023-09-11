import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import { HomePage } from './containers/HomePage/HomePage'
import { SingUpPage } from './containers/SingUpPage/SingUpPage'
import { Cart } from './containers/Cart/Cart'
import { ProductPage } from './containers/ProductPage/ProductPage'

function App() {

  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/register' element={<SingUpPage/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/product/:id' element={<ProductPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
