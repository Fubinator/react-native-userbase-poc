# react-native-userbase-poc

This repository has been created to get [userbase](http://userbase.com) running in react native. After trying several things, it will be possible to get it working. For reference, take a look at [this issue](https://github.com/smallbets/userbase/issues/275).

## The plan

The biggest problem is that React Native does not support the Web Crypto API. However, we can polyfill this using [@peculiar/webcrypto](https://github.com/PeculiarVentures/webcrypto) and [rn-nodeify](https://github.com/tradle/rn-nodeify).

## Try it yourself

1. Clone this repository
2. Install dependencies by running `yarn`
3. Enter your app credentials in the `App.tsx` file.
4. Run the app