import React from "react";

import { Route, Routes } from "react-router";
import { MainPage } from "@/pages/MainPage";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};
