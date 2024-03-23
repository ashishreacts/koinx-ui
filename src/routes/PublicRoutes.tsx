import { CreateCoinxUI } from "@/features/cryptoCoins";
import { Navigate, RouteObject } from "react-router-dom";
import { MainLayoutWrapper } from "./MainLayoutWrapper";

export const PublicRoutes: RouteObject[] = [
  // {
  //   path: "/",
  //   element: <Landing />,
  // },
  {
    path: "/",
    element: <MainLayoutWrapper />,
    children: [
      { path: "", element: <Navigate to="/app/koinxUI" /> },
      { path: "/app/koinxUI/*", element: <CreateCoinxUI /> },
    ],
  },
  // import { AuthRoutes } from '@/features/auth';
  //   {
  //     path: "/auth/*",
  //     element: <AuthRoutes />,
  //   },
];
