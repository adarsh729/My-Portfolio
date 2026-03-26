import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function LandingIntro() {
  const { isDarkMode } = useTheme();

  return (
    <section style={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{...styles.name, color: isDarkMode ? "#ffffff" : "#0f172a"}}>
          Adarsh<span style={{color: '#38bdf8'}}>.</span>
        </h1>
        
        <h2 style={{...styles.subtitle, color: isDarkMode ? "#8892b0" : "#475569"}}>
          I build digital experiences for the web.
        </h2>

        {/* UPDATED TEXT BELOW TO MATCH FULL STACK ENGINEER */}
        <p style={{...styles.description, color: isDarkMode ? "#8892b0" : "#475569"}}>
          I am a <span style={{color: "#38bdf8", fontWeight: "600"}}>Full Stack Engineer</span> specializing in architecting 
          scalable MERN applications and high-performance backend systems. I focus on bridging 
          complex logic with intuitive, responsive frontend design.
        </p>
        
        <a 
          href="/Adarsh_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={styles.button}
        >
          Check out my resume
        </a>
      </motion.div>
    </section>
  );
}

const styles = {
  container: { 
    minHeight: "90vh", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    padding: "0 10%" 
  },
  name: { fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 800, marginBottom: "10px" },
  subtitle: { fontSize: "clamp(30px, 5vw, 50px)", fontWeight: 700, marginBottom: "20px" },
  description: { maxWidth: "540px", fontSize: "18px", lineHeight: "1.6", marginBottom: "50px" },
  button: {
    display: "inline-block",
    padding: "18px 28px",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    textDecoration: "none",
    borderRadius: "4px",
    fontWeight: "600",
    fontSize: "14px",
    transition: "0.3s all ease"
  }
};

export default LandingIntro;