import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import Login from './components/login/login';
import Signup from './components/signup/signup';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
