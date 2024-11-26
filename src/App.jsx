import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import
import NavBar from './components/NavBar';
import Home from './components/Home';
import AdminPage from './components/AdminPage';
import AddEmployees from './components/AddEmployees';
import AllEmployees from './components/AllEmployees';
import Footer from './components/Footer';
import UpdateRecord from './components/Update-Record';

function App() {
  return (
    <Router> 
      <div className="w-full bg-black">
        <NavBar /> 
      </div>

      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployees />} />
        <Route path="/all-employees" element={<AllEmployees />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/update-record" element={<UpdateRecord />} />
      </Routes>
      
      
      <div className="w-full">
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
