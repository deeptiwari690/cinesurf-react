import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";
import { Home } from "./Home";
import { SearchResults } from "./SearchResults";
import { searchLoader } from "./SearchResults.loader";
import { ErrorPage } from "@/components/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
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
