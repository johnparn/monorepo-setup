
# A monorepo test

This is just a test of a monorepo. It includes a storybook of packages and some tests implement visual regression test using jest-image-snapshot.


## Getting started

Do a `git clone https://github.com/johnparn/monorepo-setup`.

Go to root folder and do `yarn` to get started.


## Start storybook

`yarn storybook` and then open http://localhost:9001 in your browser.


## Run tests and show coverage

Two tests for visual regression has a customized threshold. The reason for this is that the tests assumes a certain font is loaded. If the font can't be fetched then these tests will fail. To circumvent that the failure threshold is set to 0.0.5, ie the maximal diff between the snapshots. The snapshots take some time to perform and should likely be moved out to be a separate task.


Build web site:

`yarn build-web`

Start dev server:

`yarn dev`

Doing a `yarn dev` will run the tests in watch mode. However, when running the tests with `--watch`the intial coverage report s a bit confusing. https://github.com/facebook/jest/issues/2256.


## Run test

To start tests:

`yarn test`

To run e2e tests, in a separate console when dev server still is running, start by doing:

`yarn e2e`
