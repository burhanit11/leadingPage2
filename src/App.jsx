import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
