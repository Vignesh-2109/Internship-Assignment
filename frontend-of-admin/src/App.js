import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import Device from './pages/Device';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        {isUserSignedIn && <Route path='/account' element={<Account />} />}
        {isUserSignedIn && <Route path='/Lobby' element={<Lobby  />} />}
        {isUserSignedIn &&  <Route path="/room/:roomId" element={<Room />} />} */}
       <Route path='/' element={<Landing/>} />
       <Route path='/devices' element={<Device/>}/>
      </Routes>
    </div>
  );
}

export default App;
