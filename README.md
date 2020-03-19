# parcel2-typescript-validator-bug

A demonstration of [a bug](https://github.com/parcel-bundler/parcel/issues/4347) that appears when attempting to use `@parcel/validator-typescript.`

### Repro steps

1. Clone the repo and install dependencies with `yarn`.
2. Run `yarn start`. The project should build without any type errors
3. Change `src/returnMessage.ts` to:

   ```ts
   export function returnMessage(message: number): number {
     // we've also changed the type to 'number' here.
     console.log(message);
   }
   ```

##### Result:

The project rebuilds, but no type errors are reported by `parcel`, even though `index.ts` now contains one.
