import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./components/Recipe";

export const heli = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/recipe",
    Component: Recipe,
  }
]);
