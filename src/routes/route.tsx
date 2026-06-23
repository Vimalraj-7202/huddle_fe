import { Navigate } from "react-router-dom";
import { PrivateRoute } from "@/routes/PrivateRoute";
import { PublicRoute } from "@/routes/PublicRoute";
import Layout from "@/layout/Layout";
import { SuspenseWrapper, loadPage } from "@/common/suspense";

const LoginPage = SuspenseWrapper(
  loadPage(() => import("@/pages/auth/LoginPage"))
);
const DashboardPage = SuspenseWrapper(
  loadPage(() => import("@/pages/Dashboard/DashboardPage"))
);
const ChatPage = SuspenseWrapper(
  loadPage(() => import("@/pages/Chat/ChatPage"))
);
const SettingsPage = SuspenseWrapper(
  loadPage(() => import("@/pages/Settings/SettingsPage"))
);

const routes = [
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Navigate to="dashboard" replace /> },
          { path: "dashboard", element: <DashboardPage /> },
          { path: "chat", element: <ChatPage /> },
          { path: "settings", element: <SettingsPage /> },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <PublicRoute />,
    children: [{ path: "login", element: <LoginPage /> }],
  },
  { path: "*", element: <Navigate to="/auth/login" replace /> },
];

export default routes;
