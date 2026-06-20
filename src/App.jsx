import {Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Employees from './pages/Employees';
import NotFound from "./pages/NotFound"; 
function App(){
  return(
    <Routes>
      <Route path = '/' element= {<Login />} />
      <Route path = '/signup' element = {<Signup />} />
      <Route path = '/dashboard' element = {<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path = "/forgot-password" element = {<ForgotPassword />} />
      <Route
  path="/employees"
  element={
    <ProtectedRoute>
      <Employees />
    </ProtectedRoute> }/>
     <Route
    path="*"
    element={<NotFound />}
  />
    </Routes>
  )
}

export default App;