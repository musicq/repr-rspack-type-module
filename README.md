# Reproduce

Env

```
node: v18.19.0
pnpm: 8.12.1
```

Step

```shell
pnpm i

pnpm dev
```

Error

```log
error[internal]: Failed to resolve ./control in javascript/esm|builtin:swc-loader??ruleSet[1].rules[2].use[0]!/Users/rp/node_modules/.pnpm/flowp@0.4.4/node_modules/flowp/dist/index.js
 = Did you mean './control.js'?
     BREAKING CHANGE: The request './control' failed to resolve only because it was resolved as fully specified
     (probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"').
     The extension in the request is mandatory for it to be fully specified.
     Add the extension to the request.
```
