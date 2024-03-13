import { PlanRoute } from "@/features/plans";
import { Navigate, RouteObject } from "react-router-dom";
import { MainLayoutWrapper } from "./MainLayoutWrapper";
import { CreateCoinxUI } from "@/features/cryptoCoins";

export const ProtectedRoutes: RouteObject[] = [
  {
    path: "/app",
    element: <MainLayoutWrapper />,
    children: [
      { path: "", element: <Navigate to="/app/plans" /> }, // Redirect /app to /app/plans
      { path: "/app/plans/*", element: <PlanRoute /> },
      { path: "", element: <Navigate to="/app/koinxUI" /> },
      { path: "/app/koinxUI/*", element: <CreateCoinxUI /> },
    ],
  },
];
