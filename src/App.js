import { useSelector } from 'react-redux';
import './App.css';
import Login from './Components/Login/Login';
import Dashboard from './Components/UI/Dashboard';
import ForgotPassword from './Components/Login/ForgotPassword';
import ProtectedRoutes from './Components/ProtectRoutes/ProtectedRoutes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experiment from './Components/experiment/Experiment';
import EmployeeInfoMain from './Components/UserProfile/EmployeeInfo/EmployeeInfoMain';
import RegisterAccount from './Components/Login/RegisterAccount';

function App() {

  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          } />
          <Route path='/forgot' element={
              <ForgotPassword />} />
          <Route path='/register' element={<RegisterAccount />} />

          <Route path='/e' element={<Experiment/>}/>
        </Routes>
      </Router>
      {/* <EmployeeInfoMain /> */}
    </>
  );
}

export default App;
