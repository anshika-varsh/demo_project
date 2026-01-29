import { api } from "../lib/api";

export default function TodoItem({ todo, refresh }) {
  const deleteTodo = async () => {
    await api.delete(`/api/todos/${todo._id}`);
    refresh();
  };

  return (
    <li className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left">
      <span className="text-white/90">{todo.text}</span>
      <button
        onClick={deleteTodo}
        className="rounded-lg px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 transition"
        aria-label="Delete todo"
        title="Delete"
      >
        ✕
      </button>
    </li>
  );
}
