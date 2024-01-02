# CHANGELOG

## [v0.0.2] 2 Jan 2023

- Add global theme override for development
- Configure sticky footer
- Setup development environment flag
- Remove Flowbite UI
- Install and configure Solid UI

## [v0.0.1] 30 Dec 2023

- Reconfigure Dockerfiles, dockerignore files
- Deploy goalgetter-api to Fly.io
- Deploy goalgetter-web to Fly.io
- Configure build time env vars for web service
- Configure run time env vars for api service
- Test multi-tenancy functionality deployed
- Update deployment commands
- Reconfigure Turso integration

## [v0.0.0j] 19 Dec 2023

- Migrate goalgetter-web to Solid v1.8.7
- Integrate Solid Router v0.10.1
- Configure CORS with environment variables
- Fetch with Solid `createResource` API
- Reboot frontend with SolidJS vanilla for CSR
- Integrate Tailwind for utility class styling
- Configure Tailwind with custom environment variables
- Design base tenant themes with Tailwind config files
- Integrate Flowbite for utility component styling
- Integrate Layout, Header, Navigation, NavigationLink, Brand components

## [v0.0.0i] 11 Nov 2023

- Migrate goalgetter-web to Solid Start v0.3.10
- Test deploy goalgetter-web to Fly.io
- Integrate `SiteTitleExtended` component
- Add Layout, global Footer, copyright notice
- Configure environment variables

## [v0.0.0h] 4 Oct 2023

- Successfully render joined data across user and goals by `user.id`

## [v0.0.0g] 3 Oct 2023

- Successfully render data from API service in Solid frontend

## [v0.0.0f] 2 Oct 2023

- Create new Solid Start application with `pnpm`
- Deploy to Bun as `v0.0.0f`

## [v0.0.0b] 1 Oct 2023

- Successfully ran a fresh test deployment and update `test-node-express`
- Reinit GoalGetter API service, fresh Dockerfile and fly.toml generation
- Successfully (re)deploy `v0.0.0a` and update to `v0.0.0b` to Fly.io
- Fetch users from Turso database as `v0.0.0c`
- Fetch goals from Turso database as `v0.0.0d`
- Polish types, codebase, deploy as `v0.0.0e`

## [v0.0.0a] 30 Sept 2023

- Numerous attempts at redeploying API service `v0.0.0a`
- Issue with builds not updating, or aggressive local caching
- Frustratingly not resolved, but did traverse much of the Fly docs and commands

## [v0.0.0] 29 Sept 2023

- `create table users(id number, email text, total_logins integer);`
- `insert into users values ('001', 'mail@daz.dev', '0');`
- `bunx dockerfile`
- Successfully deploy `v0.0.0` to Fly.io
