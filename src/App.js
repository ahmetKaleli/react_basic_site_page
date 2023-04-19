import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home"
import Contact from './pages/Contact';
import HomeLayout from './pages';
import Login from './pages/Auth/Login';
import PrivateRoute from './components/PrivateRoute';
import AuthLayout from './pages/Auth/AuthLayout';
import Page404 from "./pages/Page404"

function App() {
  return (
    < >
      <Routes>
        <Route path='/' element={<PrivateRoute><HomeLayout/></PrivateRoute> }>
          <Route index={true} element={<Home/> }/>
          <Route path='Contact' element={<Contact/>}/>
        </Route>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<Login/>}/>
        </Route>
        <Route path="*" element={<Page404/>} />
      </Routes>
    </>
  );
}

export default App;
