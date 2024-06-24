import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages w-[100vw]">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/about" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            {/* Catch-all route for 404 Not Found */}
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
