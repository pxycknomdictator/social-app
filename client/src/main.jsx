import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { App } from "./layout/App.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { StoreContextProvider } from "./store/StoreContextProvider.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { CreatePostPage } from "./pages/CreatePostPage.jsx";
import { Settings } from "./pages/Settings.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ":username",
        element: <ProfilePage />,
      },
      {
        path: "create",
        element: <CreatePostPage />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StoreContextProvider>
    <RouterProvider router={router} />
  </StoreContextProvider>
);
