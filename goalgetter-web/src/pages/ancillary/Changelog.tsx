import { ParentProps } from "solid-js";
import PageAncillary from "./PageAncillary";

export default function Changelog() {
  return (
    <>
      <PageAncillary>
        <div class="prose">
          <section>
            <h2>[v0.0.2] 2 Jan 2023</h2>
            <ul>
              <li>Add global theme override for development</li>
              <li>Configure sticky footer</li>
              <li>Setup development environment flag</li>
              <li>Remove Flowbite UI</li>
              <li>Install and configure Solid UI</li>
              <li>Install Solid Icons</li>
              <li>Debug Vite config resolve alias "~" to project root</li>
              <li>Setup Tailwind global container and breakpoints</li>
            </ul>
          </section>

          <section>
            <h2>[v0.0.1] 30 Dec 2023</h2>
            <ul>
              <li>Reconfigure Dockerfiles, dockerignore files</li>
              <li>Deploy goalgetter-api to Fly.io</li>
              <li>Deploy goalgetter-web to Fly.io</li>
              <li>Configure build time env vars for web service</li>
              <li>Configure run time env vars for api service</li>
              <li>Test multi-tenancy functionality deployed</li>
              <li>Update deployment commands</li>
              <li>Reconfigure Turso integration</li>
            </ul>
          </section>

          <section>
            <h2>[v0.0.0j] 19 Dec 2023</h2>
            <ul>
              <li>Migrate goalgetter-web to Solid v1.8.7</li>
              <li>Integrate Solid Router v0.10.1</li>
              <li>Configure CORS with environment variables</li>
              <li>Fetch with Solid `createResource` API</li>
              <li>Reboot frontend with SolidJS vanilla for CSR</li>
              <li>Integrate Tailwind for utility class styling</li>
              <li>Configure Tailwind with custom environment variables</li>
              <li>Design base tenant themes with Tailwind config files</li>
              <li>Integrate Flowbite for utility component styling</li>
              <li>
                Integrate Layout, Header, Navigation, NavigationLink, Brand
                components
              </li>
            </ul>
          </section>

          <section>
            <h2>[v0.0.0i] 11 Nov 2023</h2>
            <ul>
              <li>Migrate goalgetter-web to Solid Start v0.3.10</li>
              <li>Test deploy goalgetter-web to Fly.io</li>
              <li>Integrate `SiteTitleExtended` component</li>
              <li>Add Layout, global Footer, copyright notice</li>
              <li>Configure environment variables</li>
            </ul>
          </section>

          <section>
            <h2>[v0.0.0h] 4 Oct 2023</h2>
            <ul>
              <li>
                Successfully render joined data across user and goals by
                `user.id`
              </li>
            </ul>
          </section>

          <section>
            <h2>[v0.0.0g] 3 Oct 2023</h2>
            <ul>
              <li>
                Successfully render data from API service in Solid frontend
              </li>
            </ul>
          </section>

          <section>
            <h2>[v0.0.0f] 2 Oct 2023</h2>
            <ul>
              <li>Create new Solid Start application with `pnpm`</li>
              <li>Deploy to Bun as `v0.0.0f`</li>
            </ul>
          </section>

          <section>
            <h2>[v0.0.0b] 1 Oct 2023</h2>
            <ul>
              <li>
                Successfully ran a fresh test deployment and update
                `test-node-express`
              </li>
              <li>
                Reinit GoalGetter API service, fresh Dockerfile and fly.toml
                generation
              </li>
              <li>
                Successfully (re)deploy `v0.0.0a` and update to `v0.0.0b` to
                Fly.io
              </li>
              <li>Fetch users from Turso database as `v0.0.0c`</li>
              <li>Fetch goals from Turso database as `v0.0.0d`</li>
              <li>Polish types, codebase, deploy as `v0.0.0e`</li>
            </ul>
          </section>

          <section>
            <h2>[v0.0.0a] 30 Sept 2023</h2>
            <ul>
              <li>Numerous attempts at redeploying API service `v0.0.0a`</li>
              <li>
                Issue with builds not updating, or aggressive local caching
              </li>
              <li>
                Frustratingly not resolved, but did traverse much of the Fly
                docs and commands
              </li>
            </ul>
          </section>

          <section>
            <h2>[v0.0.0] 29 Sept 2023</h2>
            <ul>
              <li>
                `create table users(id number, email text, total_logins
                integer);`
              </li>
              <li>`insert into users values ('001', 'mail@daz.dev', '0');`</li>
              <li>`bunx dockerfile`</li>
              <li>Successfully deploy `v0.0.0` to Fly.io</li>
            </ul>
          </section>
        </div>
      </PageAncillary>
    </>
  );
}
