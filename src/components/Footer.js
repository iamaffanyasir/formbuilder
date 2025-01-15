import { GitHub, Twitter, LinkedIn, ArrowForward } from '@mui/icons-material';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Form<strong>Builder</strong></h3>
          <p>
            Create stunning forms with our intuitive drag-and-drop builder. 
            No coding required, just pure creativity.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <a href="#docs">
            Documentation <ArrowForward sx={{ fontSize: 14 }} />
          </a>
          <a href="#tutorials">
            Tutorials <ArrowForward sx={{ fontSize: 14 }} />
          </a>
          <a href="#pricing">
            Pricing <ArrowForward sx={{ fontSize: 14 }} />
          </a>
        </div>
        
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#about">
            About <ArrowForward sx={{ fontSize: 14 }} />
          </a>
          <a href="#careers">
            Careers <ArrowForward sx={{ fontSize: 14 }} />
          </a>
          <a href="#contact">
            Contact <ArrowForward sx={{ fontSize: 14 }} />
          </a>
        </div>
        
        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#privacy">
            Privacy Policy <ArrowForward sx={{ fontSize: 14 }} />
          </a>
          <a href="#terms">
            Terms of Service <ArrowForward sx={{ fontSize: 14 }} />
          </a>
          <a href="#cookies">
            Cookie Policy <ArrowForward sx={{ fontSize: 14 }} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 FormBuilder. All rights reserved.</p>
        <div className="social-links">
          <a href="#github" aria-label="GitHub">
            <GitHub />
          </a>
          <a href="#twitter" aria-label="Twitter">
            <Twitter />
          </a>
          <a href="#linkedin" aria-label="LinkedIn">
            <LinkedIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 