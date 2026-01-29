import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../lib/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      const res = await api.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/todos");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white pt-24 px-6">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-black/40 border border-white/10 p-6 sm:p-8 backdrop-blur">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            Welcome back
          </h2>
          <p className="text-sm text-white/60 text-center mb-6">
            Log in to sync your 3D-powered todos across devices.
          </p>

          {error && (
            <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1 text-left">
              <label className="text-sm text-white/80">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/25"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1 text-left">
              <label className="text-sm text-white/80">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/25"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-white/60">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="h-3.5 w-3.5 rounded border-white/30 bg-black/70" />
                <span>Remember me</span>
              </label>
              <button type="button" className="hover:text-purple-300 transition">
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:hover:bg-purple-600 active:scale-[0.98] px-4 py-2.5 text-sm font-semibold transition shadow-[0_18px_45px_rgba(147,51,234,0.45)]"
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-white/60">
            Don't have an account?{" "}
            <Link to="/signup" className="text-purple-400 font-medium hover:text-purple-300 transition">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
