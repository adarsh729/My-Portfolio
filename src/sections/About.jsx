import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function About() {
  const { isDarkMode } = useTheme();
  const [showSkills, setShowSkills] = useState(false);

  // Updated to show only your specific tech stack
  const skills = [
    "HTML", "CSS", "Java", "JavaScript", "React.js",
    "Node.js", "Express.js", "MongoDB", 
    "Git", "GitHub", "SQL"
  ];

  return (
    <section id="about" style={{ padding: "100px 10%", transition: "0.3s" }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <h2 style={{ 
          marginBottom: "40px", 
          fontSize: "32px", 
          color: isDarkMode ? "#ccd6f6" : "#0f172a",
          fontWeight: "800"
        }}>
          <span style={{color: '#38bdf8', fontFamily: 'monospace', fontSize: '20px'}}>01.</span> My Profile
        </h2>

        <div style={{ textAlign: 'left' }}>
          <p style={{ ...styles.paragraph, color: isDarkMode ? "#8892b0" : "#475569" }}>
            I am a <span style={{color: "#38bdf8", fontWeight: "600"}}>Full Stack Engineer</span> dedicated to bridging the gap between complex backend logic and elegant, intuitive user experiences. My focus is on architecting <span style={{color: isDarkMode ? "#e6f1ff" : "#0f172a"}}>scalable digital ecosystems</span> that solve real-world problems.
          </p>

          <p style={{ ...styles.paragraph, color: isDarkMode ? "#8892b0" : "#475569" }}>
            Driven by a <span style={{fontWeight: "600"}}>commitment to technical excellence</span>, I specialize in building robust applications using the MERN stack and Java. I approach every challenge with a focus on clean, maintainable, and high-performance code, ensuring that every solution is built for longevity and scale.
          </p>

          <div style={{ marginTop: "40px" }}>
            <button 
              onClick={() => setShowSkills(!showSkills)} 
              style={{
                ...styles.skillTrigger,
                backgroundColor: showSkills ? "#38bdf8" : "transparent",
                color: showSkills ? "#0f172a" : "#38bdf8",
                boxShadow: showSkills ? "0 0 20px rgba(56, 189, 248, 0.4)" : "none"
              }}
            >
              {showSkills ? "Collapse Tech Stack" : "Initialize Skill Matrix"}
            </button>
          </div>

          <AnimatePresence>
            {showSkills && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={styles.skillsWrapper}
              >
                <div style={styles.gridContainer}>
                  {skills.map((skill, index) => (
                    <motion.span 
                      key={skill}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20, 
                        delay: index * 0.05 
                      }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.1,
                        backgroundColor: "#38bdf8", 
                        color: "#0f172a",
                        boxShadow: "0 10px 25px rgba(56, 189, 248, 0.6)",
                      }}
                      style={{
                        ...styles.skillBadge,
                        backgroundColor: isDarkMode ? "#112240" : "#f8fafc",
                        color: isDarkMode ? "#38bdf8" : "#0369a1",
                        border: `1px solid ${isDarkMode ? "rgba(56, 189, 248, 0.3)" : "#e2e8f0"}`
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  paragraph: { fontSize: "18px", lineHeight: "1.8", marginBottom: "25px", letterSpacing: "0.3px" },
  skillTrigger: {
    padding: "14px 28px",
    border: "2px solid #38bdf8",
    borderRadius: "4px",
    fontSize: "13px",
    fontWeight: "800",
    cursor: "pointer",
    transition: "0.4s all ease",
    fontFamily: "monospace",
    textTransform: "uppercase",
    letterSpacing: "2px"
  },
  skillsWrapper: { marginTop: "30px", overflow: "hidden" },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    padding: "25px",
    borderRadius: "12px",
    background: "rgba(56, 189, 248, 0.02)",
    border: "1px dashed rgba(56, 189, 248, 0.2)"
  },
  skillBadge: {
    padding: "12px 22px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "700",
    fontFamily: "monospace",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  }
};

export default About;