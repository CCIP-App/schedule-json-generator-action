# AGENTS.md

## Project contract

This repository is the GitHub Action wrapper for `@ccip-app/schedule-json-generator`. Keep converter logic in the npm package; keep this repo focused on Action inputs, output file writing, and `dist/` bundling.

## Boundaries

- Do not copy converter logic back into `src/`.
- Do not add spreadsheet parsing tests here; test that in the package repo.
- Public spreadsheets are the default path.
- If private spreadsheet support becomes necessary, add it as an opt-in path in the package first, then expose only the required Action inputs here.

## Release

- Run `npm install` after dependency changes.
- Run `npm run release` after source changes so `dist/index.js` matches `src/`.
- Major runtime, package, or input changes should use a new major tag such as `v4`.

## Verification

For wrapper changes, run:

```sh
npm run release
```

Then smoke-test the Action entrypoint with `INPUT_*` environment variables and write output to `/tmp`.
