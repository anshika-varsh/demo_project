import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Features from "./components/Features";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import Signup from "./components/Signup";

// Protected route
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Routes>
        {/* Landing / Hero page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Footer />
            </>
          }
        />

        {/* ToDo Dashboard (Protected) */}
        <Route
          path="/todos"
          element={
            <ProtectedRoute>
              <section className="bg-gradient-to-b from-black via-zinc-950 to-black py-16 min-h-screen">
                <div className="mx-auto max-w-4xl px-6">
                  <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6 sm:p-8 shadow-xl shadow-black/30">
                    <div className="mb-6 text-left">
                      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        ToDo Dashboard
                      </h2>
                      <p className="text-white/70 mt-1">
                        Add tasks fast, keep the list clean, and delete in one click.
                      </p>
                    </div>
                    <TodoList />
                  </div>
                </div>
              </section>
            </ProtectedRoute>
          }
        />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Signup */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
