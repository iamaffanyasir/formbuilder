import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import FormBuilder from './pages/FormBuilder'; // We'll create this later
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/form-builder" element={<FormBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
