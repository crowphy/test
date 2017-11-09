# Vue源码阅读


由于从 github 上面克隆的 vue 项目比较庞大，一般一时无法准确找到入口文件。但是可以从构建工具下手，一步步查找。

第一步：
查看```package.json`文件，通过它可以知道 vue 里面使用了哪些脚本命令。
`"scripts": {
    "dev": "rollup -w -c build/config.js --environment TARGET:web-full-dev",
    "dev:cjs": "rollup -w -c build/config.js --environment TARGET:web-runtime-cjs",
    "dev:esm": "rollup -w -c build/config.js --environment TARGET:web-runtime-esm",
    "dev:test": "karma start test/unit/karma.dev.config.js",
    "dev:ssr": "rollup -w -c build/config.js --environment TARGET:web-server-renderer",
    "dev:compiler": "rollup -w -c build/config.js --environment TARGET:web-compiler ",
    "dev:weex": "rollup -w -c build/config.js --environment TARGET:weex-framework",
    "dev:weex:factory": "rollup -w -c build/config.js --environment TARGET:weex-factory",
    "dev:weex:compiler": "rollup -w -c build/config.js --environment TARGET:weex-compiler ",
    "build": "node build/build.js",
    "build:ssr": "npm run build -- web-runtime-cjs,web-server-renderer",
    "build:weex": "npm run build -- weex",
    "test": "npm run lint && flow check && npm run test:types && npm run test:cover && npm run test:e2e -- --env phantomjs && npm run test:ssr && npm run test:weex",
    "test:unit": "karma start test/unit/karma.unit.config.js",
    "test:cover": "karma start test/unit/karma.cover.config.js",
    "test:e2e": "npm run build -- web-full-prod,web-server-basic-renderer && node test/e2e/runner.js",
    "test:weex": "npm run build:weex && jasmine JASMINE_CONFIG_PATH=test/weex/jasmine.json",
    "test:ssr": "npm run build:ssr && jasmine JASMINE_CONFIG_PATH=test/ssr/jasmine.json",
    "test:sauce": "npm run sauce -- 0 && npm run sauce -- 1 && npm run sauce -- 2",
    "test:types": "tsc -p ./types/test/tsconfig.json",
    "lint": "eslint src build test",
    "flow": "flow check",
    "sauce": "karma start test/unit/karma.sauce.config.js",
    "bench:ssr": "npm run build:ssr && node benchmarks/ssr/renderToString.js && node benchmarks/ssr/renderToStream.js",
    "release": "bash build/release.sh",
    "release:weex": "bash build/release-weex.sh",
    "release:note": "node build/gen-release-note.js",
    "setup": "node build/setup.js",
    "commit": "git-cz"
  }```