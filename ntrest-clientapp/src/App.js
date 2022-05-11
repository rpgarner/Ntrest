import { Routes, Route } from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome"
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div>
          <Routes>
            <Route index element={<Welcome />} /> 
            <Route path="register"element={<Register/>} />
            
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
