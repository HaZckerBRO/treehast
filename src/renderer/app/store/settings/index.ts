import { makeAutoObservable } from 'mobx';
import RootStore from '../root';

class SettingsStore {
  root: RootStore;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }
}

export default SettingsStore;
