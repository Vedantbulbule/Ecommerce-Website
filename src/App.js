
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Signed from './Component/Signed/Signed';
import Login from './Component/Login/Login';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Men_banner from './Component/Assets/banner_mens.png';
import Women_banner from './Component/Assets/banner_women.png';
import Kids_banner from './Component/Assets/banner_kids.png';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    
   <>
   <BrowserRouter>
   <Navbar/>
        <Routes>

        <Route path='/Cart' element={<Cart/>} />
        <Route path='/LoginSignup' element={<LoginSignup/>} />
        <Route path='/Product' element={<Product/>} >
            <Route path=':productId'element={<Product/>}>

            </Route>
        </Route>
        <Route path='/Shop' element={<Shop/>} />
        <Route path='/ShopCategory' element={<ShopCategory/>} />
        <Route path='/Signed' element={<Signed/>} />
        <Route path='/Login' element={<Login/>} />
        
                                   {/* render shopcategory component */}
        <Route path='/men' element={<ShopCategory banner={Men_banner} category="men"/>} />
        <Route path='/women' element={<ShopCategory banner={Women_banner} category="women"/>} />
        <Route path='/kid' element={<ShopCategory banner={Kids_banner} category="kid"/>} />
       

        </Routes>

        <Footer/>
        
        </BrowserRouter>
   </>
  );
}

export default App;
