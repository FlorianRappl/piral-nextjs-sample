import * as React from "react";
import { Link } from "react-router-dom";
import "../components/layout";

export function setup(app) {
  app.registerTile(() => <Link to="/sample">See Sample</Link>);
  app.registerPage(
    "/sample",
    React.lazy(() => import("../pages/index"))
  );
  app.registerPage(
    "/sample/contact",
    React.lazy(() => import("../pages/contact"))
  );
  app.registerPage(
    "/sample/about",
    React.lazy(() => import("../pages/about"))
  );
}
