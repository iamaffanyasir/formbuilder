import { useState } from 'react';
import '../styles/FormBuilder.css';
import Navbar from '../components/Navbar';
import TextFields from '@mui/icons-material/TextFields';
import Numbers from '@mui/icons-material/Numbers';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import AttachFile from '@mui/icons-material/AttachFile';
import Title from '@mui/icons-material/Title';
import TextSnippet from '@mui/icons-material/TextSnippet';
import Password from '@mui/icons-material/Password';
import CheckBox from '@mui/icons-material/CheckBox';
import RadioButtonChecked from '@mui/icons-material/RadioButtonChecked';
import Send from '@mui/icons-material/Send';
import Email from '@mui/icons-material/Email';
import Delete from '@mui/icons-material/Delete';
import Code from '@mui/icons-material/Code';
import DragIndicator from '@mui/icons-material/DragIndicator';
import Footer from '../components/Footer';

function FormBuilder() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const components = [
    { id: 'input', icon: <TextFields />, label: 'Input Field' },
    { id: 'number', icon: <Numbers />, label: 'Number' },
    { id: 'date', icon: <CalendarMonth />, label: 'Date' },
    { id: 'file', icon: <AttachFile />, label: 'File Attach' },
    { id: 'heading', icon: <Title />, label: 'Heading' },
    { id: 'textarea', icon: <TextSnippet />, label: 'Text Area' },
    { id: 'password', icon: <Password />, label: 'Password' },
    { id: 'checkbox', icon: <CheckBox />, label: 'Checkbox' },
    { id: 'radio', icon: <RadioButtonChecked />, label: 'Radio' },
    { id: 'submit', icon: <Send />, label: 'Submit' },
    { id: 'email', icon: <Email />, label: 'Email' },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="form-builder">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <div className="builder-container">
        <div className="drop-zone">
          <div className="drop-zone-text">
            <DragIndicator />
            Drag and Drop
          </div>
        </div>

        <div className="components-panel">
          <div className="components-list">
            {components.map((item) => (
              <div key={item.id} className="component-item">
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="action-buttons">
            <button className="action-btn delete-btn">
              <Delete />
            </button>
            <button className="action-btn code-btn">
              <Code />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FormBuilder; 