import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  HomeLayout,
  Landing,
  Newsletter,
  Cocktails,
  Error,
} from "./pages";
import { loader as landingLoader} from "./pages/Landing";
import { loader as singleCocktailLoader} from "./pages/Cocktail";
import {action as newsletterAction} from "./pages/Newsletter"
import { SinglePage } from "./pages/SinglePage";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      staleTime: 1000*60*5,
    }
  }
});





const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      { index: true,loader:landingLoader(queryClient) ,element: <Landing></Landing>,errorElement: <SinglePage></SinglePage> },
      { path: "cocktail/:id",loader: singleCocktailLoader(queryClient),errorElement: <SinglePage></SinglePage> ,element: <Cocktails></Cocktails> },
      { path: "about", element: <About></About> },
      { path: "newsletter", element: <Newsletter></Newsletter>, action: newsletterAction},
    ],
  },
]);

const App = () => {

  return <QueryClientProvider client = {queryClient}>
     <RouterProvider router={router}></RouterProvider>
     <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
  </QueryClientProvider>;
};
export default App;
