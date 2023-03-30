import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { ReactRouterObj } from "./routes/routes";

// Render your React component instead
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <RouterProvider router={ReactRouterObj} />
  </StrictMode>
);
