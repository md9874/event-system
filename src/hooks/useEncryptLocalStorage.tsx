import { EncryptStorage } from "encrypt-storage";
import { encryptStorageKey } from "appConfig";

function useEncryptLocalStorage() {
  const encryptStorage = new EncryptStorage(encryptStorageKey);

  function encryptLocalStorage(name: string, value: string) {
    encryptStorage.setItem(name, value);
  }

  function decryptLocalStorage(name: string) {
    return encryptStorage.getItem<string>(name);
  }

  return { set: encryptLocalStorage, get: decryptLocalStorage };
}

export default useEncryptLocalStorage;
