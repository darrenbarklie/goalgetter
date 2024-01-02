import { currentTenant } from "~/config/tenants/tenants";

export default function Home() {
  return (
    <>
      <div class="container">
        <h1 class="text-display-1 text-primary-800 text-red-500">
          {currentTenant.nameDisplay}
        </h1>
      </div>
    </>
  );
}
