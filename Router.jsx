import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Dogs } from "./pages/Dogs";
import SingleDog from "./pages/SingleDog";

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dogs" element={<Dogs/>} />
        <Route path="/:name" element={<SingleDog/>} />
      </Route>
    </Routes>
  );
};

export default Router;
