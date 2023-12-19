import { A } from "@solidjs/router";

export default function Brand() {
  const tenantName = import.meta.env.VITE_TENANT_NAME_DISPLAY;

  return (
    <>
      <A href="/" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          {tenantName || "GoalGetter"}
        </span>
      </A>
    </>
  );
}
