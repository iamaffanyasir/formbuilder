import { LightMode, DarkMode } from '@mui/icons-material';
import '../styles/Navbar.css';

function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <header className="navbar">
      <div className="logo">
        Form<strong>Builder</strong>
      </div>
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#docs">Docs</a>
        <a href="#downloads">Downloads</a>
        <div className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <LightMode /> : <DarkMode />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar; 