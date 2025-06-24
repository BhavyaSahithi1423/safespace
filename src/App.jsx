import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useAuth } from "./AuthContext";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import "./App.css";

function App() {
  const { user } = useAuth();

  const handleLogout = () => {
    signOut(auth).then(() => alert("Logged out"));
  };

  return (
    <Router>
      <header className="navbar">
        <h1 className="logo">SafeSpace</h1>
        <nav className="nav-links">
          {user ? (
            <>
              <span className="user-email">Hi, {user.email}</span>
              <Link to="/">Home</Link>
              <Link to="/create">Create Post</Link>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
