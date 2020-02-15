# parcel2-typescript-validator-bug
A demonstration of a bug that appears when attempting to use `@parcel/validator-typescript.`

***Edit:*** It looks like `@parcel/validator-typescript` requires a `tsconfig.json` file at the root of the project in order to work (see [this comment](https://github.com/parcel-bundler/parcel/issues/4138#issuecomment-586567691)). Adding that file fixed the issue.

### Original repro steps
1. Clone the repo and install dependencies with `yarn`
2. Open `index.ts` - notice it contains a type error (assigning a string to a number)
2. Run `yarn build` to try to build the project with parcel (with `@parcel/validator-typescript` enabled through the `.parcelrc` file).

##### Original result:
No type errors.