import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { SearchResults } from "./SearchResults";
import { searchLoader } from "./SearchResults.loader";
import { ErrorPage } from "@/components/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
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
