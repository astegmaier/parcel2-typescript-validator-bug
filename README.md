# parcel2-typescript-validator-bug
`@parcel/validator-typescript` requires a `tsconfig.json` file in order to work (see [this comment](https://github.com/parcel-bundler/parcel/issues/4138#issuecomment-586567691)). This branch test whether this detection works inside a mono-repo.