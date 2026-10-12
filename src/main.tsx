/**
 * WHY REACT?
 * The page is built from small reusable components (Hero, Projects, Contact…).
 * React keeps the UI in sync with data, e.g. the project cards are generated
 * from `src/lib/data.ts`, so updating content never means touching markup.
 * StrictMode only runs in development and flags common mistakes early.
 */
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
