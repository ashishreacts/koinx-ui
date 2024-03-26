import { PublicRoutes } from "@/routes/PublicRoutes";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const element = useRoutes([...PublicRoutes]);

  return <>{element}</>;
};
