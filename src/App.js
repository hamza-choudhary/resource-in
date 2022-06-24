import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactInfo from "./Components/Profile/ContactInfo";
// import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
// import ForgotPassword from "./Components/Login/ForgotPassword";
// import ProtectedRoutes from "./Components/ProtectRoutes/ProtectedRoutes";
import Experiment from "./Components/experiment/Experiment";
import EmployeeInfoMain from "./Components/UserProfile/EmployeeInfo/EmployeeInfoMain";
import Assets from "./Components/Profile/Assets";
import Relatives from "./Components/Profile/Relatives";
import Qualification from "./Components/Profile/Qualification";
import Banks from "./Components/Profile/Banks";
import MyProbation from "./Components/SelfServices/MyProbation";
import Leaves from "./Components/SelfServices/Leaves";
import LoanAndAdvance from "./Components/SelfServices/LoanAndAdvance";
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

          {/* For Profile */}
          <Route path="/profile" element={<EmployeeInfoMain />}></Route>
          <Route path="/contact_info" element={<ContactInfo />}></Route>
          <Route path="/assets" element={<Assets />}></Route>
          <Route path="/relatives" element={<Relatives />}></Route>
          <Route path="/experience" element={<Qualification />}></Route>
          <Route path="/banks" element={<Banks />}></Route>

          {/* For Services */}
          <Route path="/probation" element={<MyProbation />}></Route>
          <Route path="/leaves" element={<Leaves />}></Route>
          <Route path="/loan" element={<LoanAndAdvance />}></Route>

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
