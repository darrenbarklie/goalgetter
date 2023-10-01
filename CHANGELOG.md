# CHANGELOG

## [v0.0.0] 29 Sept 2023
- `create table users(id number, email text, total_logins integer);`
- `insert into users values ('001', 'mail@daz.dev', '0');`
- `bunx dockerfile` 
- Successfully deploy `v0.0.0` to Fly

## [v0.0.0a] 30 Sept 2023
- Numerous attempts at redeploying API service `v0.0.0a`
- Issue with builds not updating, or aggressive local caching
- Frustratingly not resolved, but did traverse much of the Fly docs and commands

## [v0.0.0b] 1 Oct 2023
- Successfully ran a fresh test deployment and update `test-node-express`
- Reinit GoalGetter API service, fresh Dockerfile and fly.toml generation
- Successfully (re)deploy `v0.0.0a` and update to `v0.0.0b` to Fly.io

