export const tenants = [
  { name: "goalgetter", nameDisplay: "GoalGetter" },
  { name: "craftapplied", nameDisplay: "Craft Applied" },
  { name: "harmony", nameDisplay: "Harmony" },
];

type TenantName = "goalgetter" | "craftapplied" | "harmony";

function getTenantByName(name: TenantName) {
  return tenants.find((tenant) => tenant.name === name) || null;
}

// NOTE: Change this to switch themes
const activeTenantName = getTenantByName("goalgetter");

export const currentTenant =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_TENANT_NAME
    : activeTenantName;
