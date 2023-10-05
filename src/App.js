import './App.css';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Login from './pages/Auth/Login' 
import ForgotPassword from './pages/Auth/ForgotPassword'
import Recipes from './pages/Recipes'

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/signup' Component={Signup}/>
          <Route path='/recipe' Component={Recipes}/>
          <Route path='/profile' Component={Profile}/>
          <Route path='/forgotpassword' Component={ForgotPassword}/>
          <Route path='/login' Component={Login}/>
          <Route path='*' element={
            <div><h1>404: PAGE NOT FOUND</h1></div>
          }/>
        </Routes>  
       </Router>
    </div>
  );
}

export default App;
