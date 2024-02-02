import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import './assets/fonts/fonts.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router> 
  )
}

const AppContent = () => {
  const location = useLocation();
  return (
    <main>
      {location.pathname !== '/' && <Header />}
      <AppRoutes />
    </main>
  );
};

export default App
