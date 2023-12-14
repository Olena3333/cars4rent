import { Route, Routes, Navigate } from "react-router";
import { Suspense } from "react";
import Layout from "./components/layout/Layout";
import Loader from "./components/loading/Loader";
import { lazy } from "react";

const Home = lazy(() => import("./pages/home/Home"));
const Catalog = lazy(() => import("./pages/catalog/Catalog"));
const Favorites = lazy(() => import("./pages/favorites/Favorites"));

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
