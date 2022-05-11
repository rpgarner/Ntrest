import { Routes, Route } from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome"
import Register from "./pages/Register";
import Feed from "./pages/Feed";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div>
          <Routes>
            <Route index element={<Welcome />} /> 
            <Route path="register" element={<Register/>} />
            <Route path="Feed" element={<Feed />} />
            
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
