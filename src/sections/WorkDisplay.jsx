import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectList from "../data/projectList";
import { useTheme } from "../context/ThemeContext";

function WorkDisplay() {
  const { isDarkMode } = useTheme();
  const [showGallery, setShowGallery] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" style={{ padding: "100px 10%", textAlign: "center" }}>
     
      <h2 style={{ color: isDarkMode ? "#ccd6f6" : "#0f172a", marginBottom: "40px", fontSize: "clamp(28px, 4vw, 36px)" }}>
        <span style={{color: '#38bdf8', fontFamily: 'monospace', fontSize: '20px'}}>02.</span> My Projects
      </h2>

      {!showGallery ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p style={{ color: "#8892b0", marginBottom: "30px", fontSize: "18px" }}>
            Explore my technical builds, from full-stack applications to AI-driven systems.
          </p>
          <button 
            onClick={() => setShowGallery(true)} 
            style={styles.mainBtn}
            onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(56, 189, 248, 0.1)'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Show All Projects
          </button>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          style={styles.grid}
        >
          {projectList.map((project, index) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -10, boxShadow: "0 20px 30px -15px rgba(2,12,27,0.5)" }}
              onClick={() => setSelectedProject(project)}
              style={{
                ...styles.card,
                backgroundColor: isDarkMode ? "#112240" : "#ffffff",
                border: isDarkMode ? "1px solid #233554" : "1px solid #e2e8f0",
              }}
            >
              <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ color: "#38bdf8", fontSize: "20px" }}>📁</span>
                <span style={{ color: "#38bdf8", fontFamily: 'monospace', fontSize: '12px' }}>PROJ-0{index + 1}</span>
              </header>

              <h3 style={{ color: isDarkMode ? "#e6f1ff" : "#0f172a", marginBottom: "15px" }}>{project.name}</h3>
              
             
              <div style={styles.techRowInline}>
                {project.techStack.slice(0, 3).map(tech => (
                  <span key={tech} style={styles.highlightTag}>{tech}</span>
                ))}
              </div>

              <p style={{ fontSize: "14px", color: "#8892b0", marginTop: "15px" }}>View Details →</p>
            </motion.div>
          ))}
        </motion.div>
      )}

   
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={styles.modalOverlay}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              style={{
                ...styles.modalContent,
                backgroundColor: isDarkMode ? "#112240" : "#ffffff",
                color: isDarkMode ? "#f8fafc" : "#0f172a"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedProject(null)} style={styles.closeBtn}>✕</button>
              
              <h2 style={{ color: "#38bdf8", marginBottom: "10px" }}>{selectedProject.name}</h2>
              <p style={{ color: "#8892b0", marginBottom: "25px", lineHeight: "1.6" }}>{selectedProject.overview}</p>
              
             
              <div style={{ marginBottom: "25px" }}>
                <h4 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px", color: isDarkMode ? "#ccd6f6" : "#0f172a" }}>Technologies Used:</h4>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {selectedProject.techStack.map(tech => (
                    <span key={tech} style={styles.modalTechTag}>{tech}</span>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: "left", borderTop: "1px solid rgba(56,189,248,0.1)", paddingTop: "20px" }}>
                <h4 style={{ marginBottom: "12px", color: "#38bdf8" }}>Key Highlights:</h4>
                <ul style={{ fontSize: "14px", color: "#8892b0", paddingLeft: "20px", lineHeight: "1.8" }}>
                  {selectedProject.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const styles = {
  mainBtn: {
    padding: "16px 32px",
    backgroundColor: "transparent",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    borderRadius: "4px",
    fontFamily: "monospace",
    cursor: "pointer",
    transition: "0.3s all"
  },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px", marginTop: "20px" },
  card: { padding: "30px", borderRadius: "4px", textAlign: "left", transition: "0.3s all", cursor: "pointer" },
  
 
  techRowInline: { display: "flex", gap: "8px", flexWrap: "wrap" },
  highlightTag: {
    fontSize: "11px",
    fontFamily: "monospace",
    color: "#38bdf8",
    padding: "2px 8px",
    backgroundColor: "rgba(56, 189, 248, 0.1)",
    borderRadius: "3px"
  },
  modalTechTag: {
    fontSize: "13px",
    fontFamily: "monospace",
    color: "#ffffff",
    backgroundColor: "#38bdf8", 
    padding: "6px 14px",
    borderRadius: "4px",
    fontWeight: "600",
    boxShadow: "0 4px 14px 0 rgba(56, 189, 248, 0.39)" 
  },

  modalOverlay: {
    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
    backgroundColor: "rgba(2, 12, 27, 0.85)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2000, backdropFilter: "blur(5px)"
  },
  modalContent: {
    padding: "40px", borderRadius: "8px", maxWidth: "700px", width: "90%", position: "relative",
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)", border: "1px solid rgba(56, 189, 248, 0.2)"
  },
  closeBtn: { position: "absolute", top: "20px", right: "20px", background: "none", border: "none", color: "#38bdf8", fontSize: "24px", cursor: "pointer" }
};

export default WorkDisplay;