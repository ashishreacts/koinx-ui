import { Route, Routes } from "react-router-dom";
import { KoinxUI } from "./KoinxUI";

export const CreateCoinxUI = () => {
  return (
    <Routes>
      <Route path="" element={<KoinxUI />} />
    </Routes>
  );
};
