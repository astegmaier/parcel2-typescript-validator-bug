# parcel2-typescript-validator-bug
A demonstration of a bug that appears when attempting to use @parcel/validator-typescript.

### Repro steps
1. Clone the repo and install dependencies with `yarn`
2. Open `index.ts` - notice it contains a type error (assigning a string to a number)
2. Run `yarn build` to try to build the project with parcel (with `@parcel/validator-typescript` enabled through the `.parcelrc` file).

##### Result:
No type errors.