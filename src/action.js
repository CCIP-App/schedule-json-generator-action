const { resolve } = require('path')
const os = require('os')
const fs = require('fs');
const core = require('@actions/core');
const generateSchedule = require('@ccip-app/schedule-json-generator')

async function run() {
  const config = {
    spreadsheetKey: core.getInput('spreadsheet-key'),
    default_avatar: core.getInput('default-avatar'),
    avatar_base_url: core.getInput('avatar-base-url'),
    output_path: core.getInput('output-path'),
  };
  let res = await generateSchedule(config);

  let resolvedPath
  // resolve tilde expansions, path.replace only replaces the first occurrence of a pattern
  if (config.output_path.startsWith(`~`)) {
    resolvedPath = resolve(config.output_path.replace('~', os.homedir()))
  } else {
    resolvedPath = resolve(config.output_path)
  }
  core.debug(`Resolved path is ${resolvedPath}`)

  fs.writeFileSync(resolvedPath, res);
  core.info('🎉 Generate schedule successfully!')
}

run().catch((error) => {
  core.setFailed(error.message);
})
