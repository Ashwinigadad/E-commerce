import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Navbar} from './components/navbar'
import {Shop} from './pages/shop/shop'
import {Cart} from './pages/cart/cart'
import {ShopcontextProvider} from './context/shop-context'

function App() {
  return (
    <div className='App'>
      <ShopcontextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          {/* <Route path="/cart" element={<Cart/>}/> */}
  
        </Routes>
      </Router>
      </ShopcontextProvider>

    </div>

  );
}

export default App;
