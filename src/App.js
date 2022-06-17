import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
// import ForgotPassword from "./Components/Login/ForgotPassword";
// import ProtectedRoutes from "./Components/ProtectRoutes/ProtectedRoutes";
import Experiment from "./Components/experiment/Experiment";
import EmployeeInfoMain from "./Components/UserProfile/EmployeeInfo/EmployeeInfoMain";
// import RegisterAccount from "./Components/Login/RegisterAccount";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} />

          <Route path="/forgot" element={<ForgotPassword />} />

          <Route path="/register" element={<RegisterAccount />} /> */}

          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          /> */}

          <Route
            path="dashboard"
            element={
              // <ProtectedRoutes>
              <Dashboard />
              // </ProtectedRoutes>
            }
          />

          <Route path="profile" element={<EmployeeInfoMain />} />

          <Route path="/e" element={<Experiment />} />
        </Routes>
      </Router>

      {/* <Layout>
        <Router>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </Router>
      </Layout> */}
      {/* <EmployeeInfoMain /> */}
    </>
  );
}

export default App;
