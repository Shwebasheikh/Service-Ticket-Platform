import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NewTicket from './Pages/ServiceRequestForm';
import ServiceRequestForm from './Pages/ServiceRequestForm';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/newticket" element={<NewTicket />} /> */}
        
<Route path="/newticket" element={<ServiceRequestForm/>}/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;



