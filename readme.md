# PNPM & NX workspace sample

This repository is based on [this tutorial](https://blog.nrwl.io/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-bc5d97258a7e).

Simply, we could create a NX monorepo workspace with Angular app and PNPM using

```bash
npx create-nx-workspace --preset=angular-monorepo --pm=pnpm
```

Then, we can use the [Nx Generators](https://nx.dev/packages/angular/generators) to generate apps, libs...

## PNPM

- `node_modules`
  - use hard and symbolic links and refer to a global cache
  - only copy direct dependencies (IDE referes only to direct dependency artifacts)
  - support for monorepo and offline mode

### Use PNPM

```bash
# Run script on single project
# pnpm --filter <package-name> <script>
pnpm --filter my-remix-app build
pnpm --filter shared-ui build
# Add dependency to single project
# pnpm add --filter <package-name> <dependency> <options>
pnpm add --filter shared-ui typescript -D
# Add dependency between app and package
pnpm add shared-ui --filter my-remix-app --workspace
# Build all projects
pnpm run -r build
pnpm run --parallel -r build
```

## Nx

- run tasks on only the packages that changed
- advanced caching based on file contents to not run anything that has already been computed previously
- remote distributed caching to speed up your CI
- dynamic terminal outpu (for parallel builds)

We still rely on the package installation and package linking mechanism that PNPM workspaces provide us,
but use Nx instead to run our tasks in the most efficient way.

### Install Nx

```bash
pnpm add nx -D -w
```

Caching is configured via [nx.json](nx.json).

### Use Nx

```bash
# Build a single project
npx nx build shared-ui
# Build multiple projects
npx nx run-many --target=build --projects=my-remix-app,shared-ui
npx nx run-many --target=build --all
# Run the Remix app
npx nx dev my-remix-app
# Build only affected
npx nx affected:build
# Project Graph
npx nx graph
```
