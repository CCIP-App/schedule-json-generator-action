import { writeFile } from "node:fs/promises"
import { resolve } from "node:path"
import * as core from "@actions/core"
import generateSchedule from "@ccip-app/schedule-json-generator"

async function run() {
  const config = {
    spreadsheetKey: core.getInput("spreadsheet-key", { required: true }),
    default_avatar: core.getInput("default-avatar", { required: true }),
    avatar_base_url: core.getInput("avatar-base-url", { required: true }),
  }
  const outputPath = core.getInput("output-path", { required: true })
  const schedule = await generateSchedule(config)

  const resolvedPath = resolve(outputPath)
  core.debug(`Resolved path is ${resolvedPath}`)

  await writeFile(resolvedPath, schedule)
  core.info("Generate schedule successfully.")
}

run().catch((error) => {
  core.setFailed(error.message)
})
