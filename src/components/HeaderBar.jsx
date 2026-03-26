import React from 'react';
import { useTheme } from '../context/ThemeContext';

function HeaderBar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header style={{
      ...styles.container,
      backgroundColor: isDarkMode ? "rgba(15, 23, 42, 0.9)" : "rgba(248, 250, 252, 0.9)",
      borderBottom: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.1)",
    }}>
      <div style={{
        ...styles.brand,
        color: isDarkMode ? "#ffffff" : "#0f172a"
      }}>
        ADARSH<span style={{ color: '#38bdf8' }}>.</span>
      </div>

      <nav style={styles.nav}>
        <a href="#about" style={{...styles.link, color: isDarkMode ? "#cbd5e1" : "#475569"}}>About</a>
        <a href="#work" style={{...styles.link, color: isDarkMode ? "#cbd5e1" : "#475569"}}>Work</a>
        <a href="#contact" style={{...styles.link, color: isDarkMode ? "#cbd5e1" : "#475569"}}>Contact</a>
        
      
        <button 
          onClick={toggleTheme} 
          style={styles.themeToggle}
          title="Toggle Theme"
        >
          {isDarkMode ? '🌙' : '☀️'}
        </button>

        <a 
          href="/Adarsh_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={styles.resumeBtn}
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 60px",
    height: "80px",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    transition: "all 0.3s ease"
  },
  brand: { 
    fontWeight: 800, 
    fontSize: "22px", 
    letterSpacing: "2px" 
  },
  nav: { 
    display: "flex", 
    alignItems: "center", 
    gap: "30px" 
  },
  link: {
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    transition: "0.3s",
    textTransform: "uppercase",
    letterSpacing: "1px"
  },
  themeToggle: {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease"
  },
  resumeBtn: {
    textDecoration: "none",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    padding: "8px 18px",
    borderRadius: "4px",
    fontSize: "13px",
    fontWeight: "bold",
    transition: "0.3s all"
  }
};

export default HeaderBar;