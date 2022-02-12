// import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import Users from './components/Users';
import { UserDetails } from './components/UserDetails';
import Admin from './components/Admin';
import Login from './components/LoginPage/Login';


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Login />
      <Routes>

        {/* <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="orderSummary" element={<OrderSummary />}></Route>
        <Route path="Products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />}></Route>
          <Route path="new" element={<NewProducts />}></Route>
        </Route>
        <Route path="users" element={<Users />}>

          <Route path=":userId" element={<UserDetails />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route path="*" element={<NoMatch />}></Route> */}

      </Routes>
      {/* index is using matching parent route */}

    </>
  );
}

export default App;
