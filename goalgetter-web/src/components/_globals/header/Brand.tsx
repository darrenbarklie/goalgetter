import { A } from "@solidjs/router";

import { currentTenant } from "~/config/tenants/tenants";

export default function Brand() {
  return (
    <>
      <A href="/" class="flex items-center">
        <span class="block w-8 h-8 mr-3 bg-primary-600 rounded">&nbsp;</span>
        <span class="self-center text-xl font-semibold whitespace-nowrap">
          {currentTenant.nameDisplay}
        </span>
      </A>
    </>
  );
}
