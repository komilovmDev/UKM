import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { routes } from "./routes/AppRoute";
import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              <Suspense fallback={route.fallback}>{route.element}</Suspense>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
