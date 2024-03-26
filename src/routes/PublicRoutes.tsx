import { CreateCoinxUI } from "@/features/cryptoCoins";
import { Landing } from "@/features/misc";
import { RouteObject } from "react-router-dom";
import { MainLayoutWrapper } from "./MainLayoutWrapper";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayoutWrapper />,
    children: [{ path: "", element: <CreateCoinxUI /> }],
  },
  {
    path: "/app",
    element: <Landing />,
  },
  // import { AuthRoutes } from '@/features/auth';
  //   {
  //     path: "/auth/*",
  //     element: <AuthRoutes />,
  //   },
];
