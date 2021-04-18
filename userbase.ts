import './shim.js';

const {Crypto} = require('@peculiar/webcrypto');
//@ts-ignore
import localStorage from 'react-native-sync-localstorage';

export default async function initialize(): Promise<void> {
  // crypto
  //@ts-ignore
  global.crypto = new Crypto();

  // localStorage
  await localStorage.getAllFromLocalStorage();
  //@ts-ignore
  global.localStorage = localStorage;

  // sessionStorage
  // https://gist.github.com/juliocesar/926500#gistcomment-1620487
  // @ts-ignore
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
  // @ts-ignore
  global.DOMException = require('domexception');
}
