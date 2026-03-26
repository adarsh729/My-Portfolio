import { useTheme } from "./context/ThemeContext";
import HeaderBar from "./components/HeaderBar";
import LandingIntro from "./sections/LandingIntro";
import About from "./sections/About";
import WorkDisplay from "./sections/WorkDisplay";
import Contact from "./sections/Contact";

function App() {
  const { isDarkMode } = useTheme(); 

  return (
    <div style={{ 
      backgroundColor: isDarkMode ? "#0f172a" : "#f8fafc", 
      color: isDarkMode ? "#f8fafc" : "#0f172a",
      minHeight: "100vh",
      transition: "all 0.3s ease" 
    }}>
      <HeaderBar />
      <main>
        <LandingIntro />
        <About />
        <WorkDisplay />
        <Contact />
      </main>
    </div>
  );
}

export default App;