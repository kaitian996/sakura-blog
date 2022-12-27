#bug description

I want to use `code-hike` in my project ,so in vite.config.ts, I import these:
```js
//vite.config.ts
import { remarkCodeHike } from "@code-hike/mdx"
import theme from "shiki/themes/github-dark.json"
``` 
but when I use
```shell
npm run dev 
```

the terminal will throw err :
```shell
failed to load config from E:\sakura-blog\vite.config.ts
error when starting dev server:
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".json" for E:\sakura-blog\node_modules\shiki\themes\github-dark.json
    at new NodeError (node:internal/errors:371:5)
    at Object.file: (node:internal/modules/esm/get_format:72:15)
    at defaultGetFormat (node:internal/modules/esm/get_format:85:38)
    at defaultLoad (node:internal/modules/esm/load:13:42)
    at ESMLoader.load (node:internal/modules/esm/loader:303:26)
    at ESMLoader.moduleProvider (node:internal/modules/esm/loader:230:58)
    at new ModuleJob (node:internal/modules/esm/module_job:63:26)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:244:11)
    at async ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:78:21)
    at async Promise.all (index 3)
```
this means the vite can not resolve json module ,but I had set

 `"resolveJsonModule": true` 

in 

`tsconfig.node.json`

how I can fix it ?
