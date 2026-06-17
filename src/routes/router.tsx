import { createBrowserRouter } from "react-router";
import { LandingLayout } from "./LandingLayout";
import { Home } from "./Home";
import { SearchResults } from "./SearchResults";
import { searchLoader } from "./SearchResults.loader";
import { ErrorPage } from "@/components/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "search",
        element: <SearchResults />,
        loader: searchLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
