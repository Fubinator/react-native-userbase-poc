# react-native-userbase-poc

This project has been created to get [Userbase](http://userbase.com) running in React Native. For reference, take a look at [this issue](https://github.com/smallbets/userbase/issues/275).

DISCLAIMER: Do not use this for real projects (yet).

## How it works

This project is heavily inspired by [userbase-js-node](https://github.com/smallbets/userbase/tree/master/src/userbase-js-node). Just like Node, React Native does not support some common Web APIs that Userbase is built on. Therefore, in order to use Userbase in React Native, we polyfill all the missing APIs.

## Try it yourself

1. Clone this repository
2. Install dependencies by running `yarn`
3. Copy the `config.example.ts` file to `config.ts` and fill it with your credentials
4. Run the app
