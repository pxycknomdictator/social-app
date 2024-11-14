import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { App } from "./layout/App.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { StoreContextProvider } from "./store/StoreContextProvider.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { CreatePostPage } from "./pages/CreatePostPage.jsx";
import { Edit } from "./pages/Edit.jsx";
import { SinglePost } from "./components/SinglePost.jsx";
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
        path: "posts/:postId",
        element: <SinglePost />,
      },
      {
        path: ":username",
        element: <ProfilePage />,
      },
      {
        path: "create",
        element: <CreatePostPage />,
      },
      {
        path: "edit",
        element: <Edit />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StoreContextProvider>
    <RouterProvider router={router} />
  </StoreContextProvider>
);
