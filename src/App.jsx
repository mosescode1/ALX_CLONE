import { LoginPage } from './Login/Login_page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashBoard} from './Dashboard/dashboard';
import { SignUp } from './Sign up/Signup';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/sign_in' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/sign_up' element={<SignUp/>}/>
      </Routes>
    </Router>
  )
}

export default App
