import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../lib/api";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);
    try {
      const res = await api.post("/api/auth/signup", {
        name,
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/todos");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white pt-24 px-6">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-black/40 border border-white/10 p-6 sm:p-8 backdrop-blur">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            Create account
          </h2>
          <p className="text-sm text-white/60 text-center mb-6">
            Sign up to keep your tasks synced with this 3D experience.
          </p>

          {error && (
            <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1 text-left">
              <label className="text-sm text-white/80">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/25"
                placeholder="Your name"
              />
            </div>
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
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/25"
                placeholder="At least 8 characters"
              />
            </div>
            <div className="flex items-start gap-2 text-xs text-white/60 text-left">
              <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 rounded border-white/30 bg-black/70" />
              <span>
                I agree to the <span className="text-purple-300 underline underline-offset-2">Terms</span> and{" "}
                <span className="text-purple-300 underline underline-offset-2">Privacy</span>.
              </span>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 rounded-xl bg-white text-black hover:bg-zinc-100 disabled:opacity-60 disabled:hover:bg-white active:scale-[0.98] px-4 py-2.5 text-sm font-semibold transition shadow-[0_18px_45px_rgba(250,250,250,0.25)]"
            >
              {isLoading ? "Creating account..." : "Sign up"}
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-white/60">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 font-medium hover:text-purple-300 transition">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
