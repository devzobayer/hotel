import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext/AuthContext';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import RoomList from './components/RoomList/RoomList'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import User from './components/User/User';


function App() {
    return (
      <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/roomlist" element={<PrivateRoute><RoomList/></PrivateRoute>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/user' element={<User/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
      </AuthProvider>
    );
}

export default App;