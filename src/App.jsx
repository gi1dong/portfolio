import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home"
import "./App.css";
import "./index.css";
import Notfound from  "./assets/pages/Notfound";
function App() {
  return (
    <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Notfound />} />

          </Routes>

    </>
  )
}

export default App;