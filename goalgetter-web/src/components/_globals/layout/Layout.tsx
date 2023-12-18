import { ParentProps } from "solid-js";

import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout(props: ParentProps) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
