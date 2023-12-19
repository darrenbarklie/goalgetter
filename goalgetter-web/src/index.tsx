/* @refresh reload */
import { ParentProps } from "solid-js";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

const root = document.getElementById("root");
import "flowbite";

import Layout from "./components/_globals/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Goals from "./pages/goals/Goals";
import Community from "./pages/community/Community";
import About from "./pages/about/About";
import Account from "./pages/account/Account";

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

const App = (props: ParentProps) => (
  <div id="app">
    <Layout>{props.children}</Layout>
  </div>
);

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Dashboard} />
      <Route path="/goals" component={Goals} />
      <Route path="/community" component={Community} />
      <Route path="/about" component={About} />
      <Route path="/account" component={Account} />
    </Router>
  ),
  root!
);
