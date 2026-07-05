# schedule-json-generator-action

Generate OPass schedule JSON from a public Google Spreadsheet in GitHub Actions.

This action is a thin wrapper around `@ccip-app/schedule-json-generator`. The conversion logic lives in that package; this repository handles GitHub Action inputs, output file writing, and the bundled `dist/` artifact.

## GitHub Actions

The spreadsheet must be readable without Google authentication:

- Share it with "Anyone with the link can view", or
- Publish it to the web.

```yaml
- name: Generate Schedule Json
  uses: CCIP-App/schedule-json-generator-action@v4
  with:
    spreadsheet-key: "198dUX5oH72Q7gaGt_SEPrON-QYNRdAu3f-F2Pg4uFoM"
    default-avatar: "https://sitcon.org/2018/static/img/staffs/stone.png"
    avatar-base-url: "https://sitcon.org/2018/static/img/speaker/"
    output-path: ./src/schedule.json
```

## Release a new version

```bash
npm install
npm run release
git commit
git tag v4
```

Commit the generated `dist/` changes before tagging.
