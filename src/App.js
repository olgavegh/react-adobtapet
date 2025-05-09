import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import Root from "./components/root";

import {
  RouteProvider,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const appRouter = "REPLACE ME";

function App() {
  return <RouteProvider router={appRouter} />;
}
export default App;
