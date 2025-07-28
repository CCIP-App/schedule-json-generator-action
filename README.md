# schedule-json-generator

Generate schedule json file for OPass from Google Spreadsheet

## GitHub Actions

Create your GCP API key from https://console.developers.google.com/apis/credentials and enable Google Sheets API.

You need to put your GCP API key into `Repo's Settings` > `Secrets` > `Actions` > `New repository secret`.

After that, you can simply copy following code to your GitHub Actions workflow.

```yaml
- name: Generate Schedule Json
  uses: CCIP-App/schedule-json-generator-action@v2.1
  with:
    gcp-api-key: ${{ secrets.GCP_API_KEY }}
    spreadsheet-key: "198dUX5oH72Q7gaGt_SEPrON-QYNRdAu3f-F2Pg4uFoM"
    default-avatar: "https://sitcon.org/2018/static/img/staffs/stone.png"
    avatar-base-url: "https://sitcon.org/2018/static/img/speaker/"
    output-path: ./src/schedule.json
```

## Release a new version

```bash
npm i
npm run release
```
