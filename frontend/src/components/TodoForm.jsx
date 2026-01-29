import { useState } from "react";
import { api } from "../lib/api";

export default function TodoForm({ refresh }) {
  const [text, setText] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const addTodo = async (e) => {
    e?.preventDefault?.();
    const trimmed = text.trim();
    if (!trimmed || isSaving) return;
    try {
      setIsSaving(true);
      await api.post("/api/todos", { text: trimmed });
      setText("");
      refresh();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={addTodo} className="flex gap-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo…"
        className="flex-1 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20"
      />
      <button
        type="submit"
        disabled={isSaving}
        className="rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:hover:bg-purple-600 px-5 py-3 font-semibold transition shadow-lg shadow-purple-600/15"
      >
        {isSaving ? "Adding…" : "Add"}
      </button>
    </form>
  );
}
