import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/layout';


const APP =() => {

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
