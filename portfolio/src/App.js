import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import AllPages from "./pages/AllPages";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<AllPages />} />
          <Route path="/react-portfolio" element={<AllPages />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
