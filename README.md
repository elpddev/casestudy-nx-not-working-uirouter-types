# Case Study - NX Workspace - UIRouter Type Import Not Working

This represent an attempt to:

1. NX monorepo on exiting yarn monorepo
2. Library that was converted to nx web rollup builder
3. Usage of angular ui router in the library

## Steps

1. Run `yarn install`
2. Run `yarn nx build lib-a`

As result, the following error is received:

```
$ yarn nx build lib-a

> nx run lib-a:build
Bundling lib-a...

Error during bundle: Error: /home/user/projects/os/casestudy-nx-not-working-uirouter-types/packages/lib-a
/src/index.ts(1,14): semantic error TS2305: Module '"angular"' has no exported member 'ui'.

Error during bundle: Error: /home/user/projects/os/casestudy-nx-not-working-uirouter-types/packages/lib-a
/src/index.ts(1,14): semantic error TS2305: Module '"angular"' has no exported member 'ui'.
Bundle failed: lib-a
```
