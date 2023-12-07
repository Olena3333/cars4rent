import "./App.css";

import { Route, Routes, Navigate } from "react-router";

import Catalog from "./pages/catalog/Catalog";
import Favorites from "./pages/favorites/Favorites";
import Home from "./pages/home/Home";
import { Suspense } from "react";
import Layout from "./components/layout/Layout";
import Loader from "./components/loading/Loader";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
export default App;
