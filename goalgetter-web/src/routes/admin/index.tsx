import { For, Accessor, createResource } from "solid-js";
import { useRouteData } from "solid-start";

type User = { id: number; emailAddress: string; totalLogins: number };

export function routeData() {
  const [users] = createResource(async () => {
    const response = await fetch("https://goalgetter-api.fly.dev/user");
    return await response.json() as User[];
  });
 
  return { users };
}

export default function Admin() {
  const { users } = useRouteData<typeof routeData>();
  
  return (
    <>
      <div>
        <h1>Admin</h1>

        <ul>
          <For each={users()}>
            {(item) => <li>{item.id} {item.emailAddress} {item.totalLogins}</li>}
          </For>
        </ul>
      </div>
    </>
  )
}
