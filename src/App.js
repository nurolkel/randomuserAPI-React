import { useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { DataProvider} from './context/DataContext';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';

import Layout from './components/layout';


const APP =() => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // },[])

  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="user/:id" element={<Profile  />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default APP
