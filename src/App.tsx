import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
function App() {
  return (
    <div>
      <Router>
        <div>
          <AppRoutes />
        </div>
      </Router>
    </div>
  );
}

export default App;
