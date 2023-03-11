import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/home/home';
import { Login } from './Pages/login';
import { CreatePost } from './Pages/create-post/create-post';
import { Navbar } from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/login" element={<Login />}/>
          <Route  path="/create-post" element={<CreatePost />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
