import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './Pages/main';
import { Login } from './Pages/login';
import { Navbar } from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Main />}/>
          <Route  path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
