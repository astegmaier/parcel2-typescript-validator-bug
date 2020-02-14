# parcel2-typescript-validator-bug
A demonstration of a bug when attempting to use @parcel/validator-typescript

### Repro steps
1. Clone the repo and install dependencies with `yarn`
2. Run parcel (with `@parcel/validator-typescript` enabled through the `.parcelrc` file).

Result:

```
$ parcel build src/index.ts
🚨 Build failed.
Error: Unexpected token export
/Users/Andrew/Projects/parcel2-typescript-validator-bug/node_modules/@parcel/ts-utils/src/index.js:2
export * from './FSHost';
^^^^^^

SyntaxError: Unexpected token export
    at Module._compile (internal/modules/cjs/loader.js:723:23)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at NodePackageManager.load (/Users/Andrew/Projects/parcel2-typescript-validator-bug/node_modules/@parcel/package-manager/lib/NodePackageManager.js:112:9)
    at NodePackageManager.requireSync (/Users/Andrew/Projects/parcel2-typescript-validator-bug/node_modules/@parcel/package-manager/lib/NodePackageManager.js:78:17)
    at Module.m.require.id [as require] (/Users/Andrew/Projects/parcel2-typescript-validator-bug/node_modules/@parcel/package-manager/lib/NodePackageManager.js:99:19)
    at require (internal/modules/cjs/helpers.js:25:18)
    at Object.<anonymous> (/Users/Andrew/Projects/parcel2-typescript-validator-bug/node_modules/@parcel/validator-typescript/lib/TypeScriptValidator.js:14:16)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)

```