import { For, createResource } from "solid-js";
import { useRouteData } from "solid-start";

type User = { id: number; emailAddress: string; totalLogins: number };
type Goal = { id: number; title: string, description: string; completed?: boolean };

export function routeData() {
  const [users] = createResource(async () => {
    const response = await fetch("https://goalgetter-api.fly.dev/user");
    return await response.json() as User[];
  });

  const [goals] = createResource(async () => {
    const response = await fetch("https://goalgetter-api.fly.dev/goal");
    return await response.json() as Goal[];
  });

  const [userWithGoals] = createResource(async () => {
    const response = await fetch("https://goalgetter-api.fly.dev/user/goals");
    console.log("--------------------------");
    console.log(response);
    return await response.json() as any[];
  })


  return { users, goals, userWithGoals };
}

export default function Admin() {
  const { users, goals, userWithGoals } = useRouteData<typeof routeData>();
  
  return (
    <>
      <div>
        <h1>Admin</h1>

        <h2>Users</h2>

        <ul>
          <For each={users()}>
            {(item) => <li>{item.id} {item.emailAddress} {item.totalLogins}</li>}
          </For>
        </ul>

        <hr />

        <h2>Goals</h2>
        
        <ul>
          <For each={goals()}>
            {(item) => <li>{item.id} {item.title} {item.description}</li>}
          </For>
        </ul>

        <hr />

        <h2>User with Goals</h2>
        
        <ul>
          <For each={userWithGoals()}>
            {(item) => <li>{item.user.id} {item.user.name} {item.goal.title}</li>}
          </For>
        </ul>
      </div>
    </>
  )
}
