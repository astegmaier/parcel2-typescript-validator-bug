# parcel2-typescript-validator-bug

A demonstration of a bug that appears when attempting to use `@parcel/validator-typescript.`

The project contains two files (`index.ts` and `message2.ts`, _both_ of which have a type error in them).

### Repro steps

1. Clone the repo and install dependencies with `yarn`.
2. Run `yarn build`

##### Result:

`@parcel/validator-typescript` will display type errors from only _one_ of the files, e.g:

```
@parcel/validator-typescript: Type '123' is not assignable to type 'string'.
/Users/Andrew/Projects/parcel2-typescript-validator-bug/src/message2.ts
/Users/Andrew/Projects/parcel2-typescript-validator-bug/src/message2.ts:1:14
> 1 | export const myVar: string = 123;
>   |              ^^^^^^ Type '123' is not assignable to type 'string'.
  2 |
```

or

```
@parcel/validator-typescript: Type '"My Message!"' is not assignable to type 'number'.
/Users/Andrew/Projects/parcel2-typescript-validator-bug/src/index.ts
/Users/Andrew/Projects/parcel2-typescript-validator-bug/src/index.ts:2:7
  1 | import { myVar } from "./message2";
> 2 | const message: number = "My Message!";
>   |       ^^^^^^^^ Type '"My Message!"' is not assignable to type 'number'.
  3 | export const output = myVar + message;
  4 |
```

But never _both_ at the same time.
