import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import './assets/fonts/fonts.css';

function App() {

  return (
    <Router>
      <div>
        <Header />
      </div>
      <AppRoutes />
    </Router> 
  )
}

export default App
