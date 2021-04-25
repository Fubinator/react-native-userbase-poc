// @ts-nocheck
import './shim.js';
import getRandomValues from 'react-native-get-random-values';
const {Crypto} = require('@peculiar/webcrypto');
import localStorage from 'react-native-sync-localstorage';

export default async function initialize(): Promise<void> {
  // crypto
  global.crypto = new Crypto();
  global.crypto.getRandomValues = getRandomValues;

  // localStorage
  await localStorage.getAllFromLocalStorage();
  global.localStorage = localStorage;

  // sessionStorage
  // https://gist.github.com/juliocesar/926500#gistcomment-1620487
  global.sessionStorage = {
    _data: {},
    setItem: function (id: string, val: any) {
      return (this._data[id] = String(val));
    },
    getItem: function (id: string) {
      return Object.prototype.hasOwnProperty.call(this._data, 'id')
        ? this._data[id]
        : undefined;
    },
    removeItem: function (id: string) {
      return delete this._data[id];
    },
    clear: function () {
      return (this._data = {});
    },
  };

  // DOMException
  global.DOMException = require('domexception');
}
