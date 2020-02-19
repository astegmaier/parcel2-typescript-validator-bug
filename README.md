# parcel2-typescript-validator-bug

A demonstration of a bug that appears when attempting to use `@parcel/validator-typescript.`

### Repro steps

1. Clone the repo and install dependencies with `yarn`.
2. Open `index.tsx` - notice it contains a type error (assigning a string to a number).
3. Run `yarn build` to try to build the project with parcel (with `@parcel/validator-typescript` enabled through the `.parcelrc` file).
4. Notice that `@parcel/validator-typescript` displays the type error in the console (yay!)
5. Change `const message: number` in `src/index.tsx` to `const message: string` (thus fixing the error), and save the file.

##### Result:

The project rebuilds successfully, but `@parcel/validator-typescript` still displays the old error message. Note that the text of the file in the message is the same as it was before the change:

```
🚨 Build failed.
@parcel/validator-typescript: Type '"A new Message!"' is not assignable to type 'number'.
/Users/Andrew/Projects/parcel2-typescript-validator-bug/src/index.tsx
/Users/Andrew/Projects/parcel2-typescript-validator-bug/src/index.tsx:5:7
  4 |
> 5 | const message: number = "A new Message!"; // This is a type error!
>   |       ^^^^^^^^ Type '"A new Message!"' is not assignable to type 'number'.
  6 |
  7 | ReactDOM.render(<App message={message} />, document.getElementById("root"));
@parcel/validator-typescript: Type 'number' is not assignable to type 'string'.
/Users/Andrew/Projects/parcel2-typescript-validator-bug/src/index.tsx
/Users/Andrew/Projects/parcel2-typescript-validator-bug/src/index.tsx:7:22
  6 |
> 7 | ReactDOM.render(<App message={message} />, document.getElementById("root"));
>   |                      ^^^^^^^^ Type 'number' is not assignable to type 'string'.
  8 |
```
