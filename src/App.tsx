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
    <div>
      {location.pathname !== '/' && <Header />}
      <AppRoutes />
    </div>
  );
};

export default App
