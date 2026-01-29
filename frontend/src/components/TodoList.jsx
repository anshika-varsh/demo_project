import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { api } from "../lib/api";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    setError("");
    try {
      setIsLoading(true);
      const res = await api.get("/api/todos");
      setTodos(res.data);
    } catch (e) {
      setError(
        e?.response?.data?.message ||
          "Couldn’t load todos. Make sure your backend is running."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="space-y-4">
      <TodoForm refresh={fetchTodos} />
      {error ? (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-left text-red-100">
          {error}
        </div>
      ) : null}

      {isLoading ? (
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-left text-white/70">
          Loading your todos…
        </div>
      ) : todos.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-left">
          <p className="font-semibold">No todos yet.</p>
          <p className="text-white/70">Add your first task above.</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} refresh={fetchTodos} />
          ))}
        </ul>
      )}
    </div>
  );
}
