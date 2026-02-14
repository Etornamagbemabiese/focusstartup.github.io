import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

try {
  createRoot(root).render(<App />);
} catch (err) {
  const msg = err instanceof Error ? err.message : String(err);
  root.innerHTML = `
    <div style="padding:2rem;text-align:center;font-family:system-ui;max-width:32rem;margin:0 auto">
      <h2 style="color:#dc2626">Failed to load</h2>
      <p style="color:#64748b;font-size:0.875rem">${msg}</p>
      <button onclick="location.reload()" style="margin-top:1rem;padding:0.5rem 1rem;cursor:pointer">Retry</button>
    </div>
  `;
  console.error("App failed to mount:", err);
}
