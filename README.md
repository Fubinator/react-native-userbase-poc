# react-native-userbase-poc

This repository has been created to get [userbase](http://userbase.com) running in react native. After trying several things, it will be possible to get it working. For reference, take a look at [this issue](https://github.com/smallbets/userbase/issues/275).

## The plan

The biggest problem is that React Native does not support the Web Crypto API. However, we can polyfill this using [@peculiar/webcrypto](https://github.com/PeculiarVentures/webcrypto) and [rn-nodeify](https://github.com/tradle/rn-nodeify).

## Try it yourself

1. Clone this repository
2. Install dependencies by running `yarn`
3. Enter your app credentials in the `App.tsx` file.
4. Change the constant `HASH_ALGORITHM_NAME` in `node_modules/userbase-js/lib/Crypto/sha-256.js` to `sha-256`. This has to be done because of an issue with `browserify-sign` which is used by `rn-nodeify` (See [here](https://github.com/crypto-browserify/browserify-sign/issues/71))
5. Run the app

Disclaimer: For now, you have to change the following in the file located in `/node_modules/parse-asn1/node_modules/pbkdf2/lib/default-encoding.js`:
`global."v15.12.0"` to `global.process.version`
This is due to an issue in `rn-nodeify` (See [here](https://github.com/tradle/rn-nodeify/issues/104))
