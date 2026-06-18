import { createBrowserRouter } from "react-router";
import { LandingLayout } from "./LandingLayout";
import { Home } from "./Home";
import { homeLoader } from "./Home.loader";
import { SearchResults } from "./SearchResults";
import { searchLoader } from "./SearchResults.loader";
import { ErrorPage } from "@/components/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "search",
        element: <SearchResults />,
        loader: searchLoader,
      },
    ],
  },
]);
