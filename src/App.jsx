import { LoginPage } from './Login/Login_page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { DashBoard} from './Dashboard/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/sign_in' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
    </Router>
  )
}

export default App
