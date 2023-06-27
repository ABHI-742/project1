
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       <Routes>
         
        
          <Route path='/login' element={<Login/>} />
          <Route path='/signUp' element={<SignUp/>} />
         
       </Routes>
    </BrowserRouter>
    
    // <Login/>
  );
}

export default App;
