import './style.js';
import {Container} from '@material-ui/core';
import Navbar from './Components/Navbar/Navbar.js';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState } from 'react';

function App() {
  const [user, setUser] = useState(JSON.stringify(sessionStorage.getItem('profile')));
  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
        <Navbar  user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<Home user={user} />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
