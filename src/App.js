import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import DataContractForm from './components/data-contract-form/DataContractForm';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<DataContractForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
