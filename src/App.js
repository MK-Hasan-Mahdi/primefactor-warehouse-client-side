import { ToastContainer } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddItem from './Pages/AddItem/AddItem';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import ManageItem from './Pages/ManageItem/ManageItem';
import MyItem from './Pages/MyItem/MyItem';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <PrivateRoute>
            <InventoryDetail></InventoryDetail>
          </PrivateRoute>
        }></Route>
        <Route path='/additem' element={
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        }></Route>
        <Route path='/manageitem' element={
          <PrivateRoute>
            <ManageItem></ManageItem>
          </PrivateRoute>
        }></Route>
        <Route path='/myitem' element={
          <PrivateRoute>
            <MyItem></MyItem>
          </PrivateRoute>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
