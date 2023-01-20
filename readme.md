# PNPM sample

This repository is based on [this tutorial](https://blog.nrwl.io/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-bc5d97258a7e).

## Use the project

```bash
# Run script on single project
# ❯ pnpm --filter <package-name> <script>
pnpm --filter my-remix-app build
pnpm --filter shared-ui build
# Add dependency to single project
# ❯ pnpm add --filter <package-name> <dependency> <options>
pnpm add --filter shared-ui typescript -D
# Add dependency between app and package
pnpm add shared-ui --filter my-remix-app --workspace
# Build all projects
pnpm run -r build
pnpm run --parallel -r build
```
