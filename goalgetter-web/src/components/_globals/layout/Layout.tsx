import { ParentProps } from "solid-js";

import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout(props: ParentProps) {
  // Read tenant name from env file and call bespoke tailwind config
  // Ref: https://tailwindcss.com/blog/tailwindcss-v3-2#multiple-config-files-in-one-project-using-config
  // Ref: https://github.com/tailwindlabs/tailwindcss/pull/9405

  switch (import.meta.env.VITE_TENANT_NAME) {
    case "goalgetter":
      import("../../../styles/goalgetter.css");
      break;
    case "craftapplied":
      import("../../../styles/craftapplied.css");
      break;
    case "harmony":
      import("../../../styles/harmony.css");
      break;
    default:
      import("../../../index.css");
  }

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
