function v4 で　GET POST やってみた。
```zsh
git clone git@github.com:YuSa0-6/todo-azure-functions-v4.git

npm install

npm run build
```

```typescript
// local.setting.json

  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsFeatureFlags": "EnableWorkerIndexing",
    "sqlConnectionString": "{接続変数入れる。パスワードも突っ込む}"
  }
```

```zsh
func start
```