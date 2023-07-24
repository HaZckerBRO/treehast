import { makeAutoObservable } from 'mobx';
import { SettingsStore, SidebarStore } from './index';

class RootStore {
  private static instance: RootStore;

  sidebar: SidebarStore;
  settings: SettingsStore;

  private constructor() {
    this.settings = new SettingsStore(this);
    this.sidebar = new SidebarStore();
    makeAutoObservable(this);
  }

  public static getInstance = () => {
    if (!RootStore.instance) {
      RootStore.instance = new RootStore();
    }
    return RootStore.instance;
  };
}

export default RootStore.getInstance();
