import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Error from "./components/Error";
import SearchResults from "./components/SearchResults";

const App: React.FC = () => {
  return <div className="container-fluid">
    <div className="header">
      <Header />
    </div>
    <div className="main">
      <Search />
      <Outlet />
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>;
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/search-results",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <SearchResults />
          </Suspense>
        ),
      }
    ],
    errorElement: (
      <Suspense fallback={<h1>loading...</h1>}>
        <Error />
      </Suspense>
    ),
  },
]);


const container = document.getElementById("app-root")!;
const root = createRoot(container);
root.render(<RouterProvider router={appRouter} />);
