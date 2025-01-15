import { useNavigate } from 'react-router-dom';
import '../styles/Welcome.css';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Build Forms, Your Way</h1>
        <div className="welcome-text">
          <p>Say goodbye to complex form creation. Design, customize, and export forms</p>
          <p>effortlessly with our modern and intuitive platform.</p>
          <p>Start creating forms that work seamlessly on any website</p>
          <p>no coding experience needed!</p>
        </div>
        <button className="get-started-btn" onClick={() => navigate('/form-builder')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Welcome; 