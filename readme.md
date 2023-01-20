# PNPM sample

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
