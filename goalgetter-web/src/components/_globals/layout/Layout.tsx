import { ParentProps } from "solid-js";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import { currentTenant } from "~/config/tenants/tenants";

export default function Layout(props: ParentProps) {
  // Read tenant name from env file and call bespoke tailwind config
  // Ref: https://tailwindcss.com/blog/tailwindcss-v3-2#multiple-config-files-in-one-project-using-config
  // Ref: https://github.com/tailwindlabs/tailwindcss/pull/9405

  switch (currentTenant) {
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
      <div class="flex-1 bg-primary-100">{props.children}</div>
      <Footer />
    </>
  );
}
