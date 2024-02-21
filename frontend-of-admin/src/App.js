import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing';

import CreateDevice from './pages/CreateDevice';
import AssignDevice from './pages/AssignDevice';
import DesDevice from './pages/DesDevice';
import RegisterCustomer from './pages/RegisterCustomer';
function App() {
  return (
    <div className="App">
      <Routes>     
        <Route path='/' element={<Landing/>} />
        <Route path='create-device' element={ <CreateDevice/>}/>
        <Route path='assign-device' element={<AssignDevice/>}/>
        <Route path='device-description' element={<DesDevice/>}/>
        <Route path='regidter-customer' element={<RegisterCustomer/>} />
      </Routes>
    </div>
  );
}

export default App;
