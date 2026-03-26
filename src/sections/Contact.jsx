import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function Contact() {
  const { isDarkMode } = useTheme();

  const contactData = [
    { label: "Email", value: "adarshgupta.rbl@gmail.com" },
    { label: "Phone", value: "+91 7355445100" },
    { label: "LinkedIn", value: "Adarsh Gupta", link: "https://www.linkedin.com/in/adarshgupta7585" }
  ];

  return (
    <section id="contact" style={{ padding: "100px 10%", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p style={{ color: "#38bdf8", fontFamily: "monospace", marginBottom: "10px" }}>03. What's Next?</p>
        <h2 style={{ fontSize: "clamp(30px, 5vw, 45px)", color: isDarkMode ? "#ccd6f6" : "#0f172a", marginBottom: "20px" }}>Get In Touch</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 40px", color: isDarkMode ? "#8892b0" : "#475569", lineHeight: "1.6" }}>
          I’m currently looking for new opportunities. Whether you have a question or just want to discuss a project, my inbox is always open!
        </p>

        <div style={styles.infoGrid}>
          {contactData.map((item, index) => (
            <div key={index} style={styles.infoItem}>
              <span style={{ color: "#38bdf8", fontWeight: "600", fontSize: "12px", textTransform: "uppercase" }}>{item.label}</span>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ ...styles.link, color: isDarkMode ? "#ffffff" : "#0f172a" }}
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "60px" }}>
          <a href="mailto:adarshgupta.rbl@gmail.com" style={styles.mainBtn}>Say Hello</a>
        </div>
      </motion.div>
      
      <footer style={{ marginTop: "100px", opacity: 0.5, fontSize: "12px", fontFamily: "monospace" }}>
        Designed & Built by Adarsh Gupta
      </footer>
    </section>
  );
}

const styles = {
  infoGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
    marginTop: "20px"
  },
  infoItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px"
  },
  link: {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "0.3s",
    borderBottom: "1px solid transparent"
  },
  mainBtn: {
    padding: "18px 35px",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    textDecoration: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    transition: "0.3s all",
    display: "inline-block"
  }
};

export default Contact;