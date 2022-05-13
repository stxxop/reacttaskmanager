import React from "react";
import { createRoot } from "react-dom/client";
import TaskPage from "./components/TaskPage";

const App = () => {
  return <TaskPage />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
