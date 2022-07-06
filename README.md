schedule-json-generator
===

Generate schedule json file for OPass from Google Spreadsheet
## GitHub Actions
You need to put your GCP API key into `Repo's Settings` > `Secrets` > `Actions` > `New repository secret`.

After that, you can simply copy following code to your GitHub Actions workflow.
```yaml
name: Generate Schedule Json file
on:
  - push
  - workflow_dispatch

jobs:
  generate-schedule-json:
    runs-on: ubuntu-latest
    name: Generate schedule
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Generate Schedule Json
        uses: CCIP-App/schedule-json-generator-action@v1
        id: generate
        with:
          gcp-api-key: ${{ secrets.GCP_API_KEY }}
          spreadsheet-key: "198dUX5oH72Q7gaGt_SEPrON-QYNRdAu3f-F2Pg4uFoM"
          default-avatar: "https://sitcon.org/2018/static/img/staffs/stone.png"
          avatar-base-url: "https://sitcon.org/2018/static/img/speaker/"
      # Use the output from the `generate` step
      - name: Get the output json
        run: echo '${{ steps.generate.outputs.output-json }}'
```