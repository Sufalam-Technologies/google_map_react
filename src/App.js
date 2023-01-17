import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import DefaultMap from "./dashboard/DefaultMap/DefaultMap";
import MarkerMap from "./dashboard/Custom Marker/MarkerMap";
import TypesMap from "./dashboard/Map Types/TypesMap";
import LocaleMap from "./dashboard/Locale Map/LocaleMap";
import ShapesMap from "./dashboard/Shape Map/ShapesMap";
import BoundariesMap from "./dashboard/Boundaries Map/BoundariesMap";
import InfoWindowMap from "./dashboard/InfoWindow Map/InfoWindowMap";
import ErrorBoundary from "./Error/ErrorBoundary";
import GoogleMap from "./dashboard/Cluster Marker/components/GoogleMap";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />
    },
    {
      path: "/map/default",
      element: <DefaultMap />,
      errorElement: <ErrorBoundary />,
      hasErrorBoundary: true
    },
    {
      path: "/map/marker",
      element: <MarkerMap />
    },
    {
      path: "/map/types",
      element: <TypesMap />
    },
    {
      path: "/map/locale/:id",
      element: <LocaleMap />
    },
    {
      path: "/map/cluster-marker",
      element: <GoogleMap />
    },
    {
      path: "/map/shapes",
      element: <ShapesMap />
    },
    {
      path: "/map/boundaries",
      element: <BoundariesMap />
    },
    {
      path: "/map/infowindow",
      element: <InfoWindowMap />
    }
  ]);

  return (
    <>
      <div className="m-5">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
