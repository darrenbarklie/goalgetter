/* @refresh reload */
import { JSX, ParentProps } from "solid-js";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import Dashboard from "./pages/dashboard/Dashboard";
import About from "./pages/about/About";
import Goals from "./pages/goals/Goals";
import Account from "./pages/account/Account";

import "./index.css";
import Header from "./components/_globals/header/Header";
import Footer from "./components/_globals/footer/Footer";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

const App = (props: ParentProps) => (
  <>
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  </>
);

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Dashboard} />
      <Route path="/goals" component={Goals} />
      <Route path="/about" component={About} />
      <Route path="/account" component={Account} />
    </Router>
  ),
  root!
);
