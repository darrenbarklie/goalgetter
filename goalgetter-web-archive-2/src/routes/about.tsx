import { For, createResource } from "solid-js";
import { useRouteData } from "solid-start";

import SiteTitleExtended from "~/components/_globals/SiteTitleExtended";

type AppVersion = {
  version: string;
};

export function routeData() {
  const [appVersion] = createResource(async () => {
    const endpoint = `http://localhost:3001/version`;
    const response = await fetch(endpoint);
    return await response.json();
  });

  return { appVersion };
}

export default function About() {
  const { appVersion } = useRouteData<typeof routeData>();

  console.log(appVersion());

  return (
    <>
      <SiteTitleExtended>About</SiteTitleExtended>
      <main class="text-center mx-auto text-gray-700 p-4">
        <h1 class="text-3xl">About</h1>

        <span>{appVersion() ? appVersion()?.version : "Nil"}</span>
      </main>
    </>
  );
}

// type Student = { name: string; house: string };

// export function routeData() {
//   const [students] = createResource(async () => {
//     const response = await fetch("https://hogwarts.deno.dev/students");
//     return (await response.json()) as Student[];
//   });

//   return { students };
// }

// export default function Page() {
//   const { students } = useRouteData<typeof routeData>();

//   return (
//     <ul>
//       <For each={students()}>{(student) => <li>{student.name}</li>}</For>
//     </ul>
//   );
// }
