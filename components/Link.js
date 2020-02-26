import * as React from "react";
import { Link } from "react-router-dom";

export default ({ href, children }) => (
  <Link to={`/sample${href}`}>{children}</Link>
);
