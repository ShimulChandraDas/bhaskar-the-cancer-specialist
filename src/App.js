import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Blogs from './Components/Pages/Blogs/Blogs';
import Checkout from './Components/Pages/Checkout/Checkout/Checkout';
import Details from './Components/Pages/Details/Details';
import Contact from './Components/Pages/Home/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import Services from './Components/Pages/Home/Services/Services';
import Login from './Components/Pages/Login/Login';
import RequireAuth from './Components/Pages/Login/RequireAuth/RequireAuth';
import Register from './Components/Pages/Register/Register';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceID' element={<Details></Details>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
