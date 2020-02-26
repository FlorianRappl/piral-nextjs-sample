import * as React from "react";
import '../components/layout';

export function setup(app) {
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
