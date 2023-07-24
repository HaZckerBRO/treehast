import { makeAutoObservable } from 'mobx';
import { PageName, Settings } from './types';

const pagesNames: PageName[] = [
  PageName.Main,
  PageName.Templates,
  PageName.Structure,
];

const defaultSidebarWidth = 200;

class SidebarStore {
  currentPage: PageName = PageName.Main;

  settings: Settings = {
    width: {
      [PageName.Main]: defaultSidebarWidth,
      [PageName.Structure]: defaultSidebarWidth,
      [PageName.Templates]: defaultSidebarWidth,
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  init = () => {
    const element = document.getElementById('sidebar');
    if (element) {
      this.setWidth(defaultSidebarWidth);
    }
  };

  setWidth = (value: number) => {
    const key = this.currentPage;
    const min = 50;
    const max = 900;

    if (value < min) {
      this.settings.width[key] = min;
    } else if (value > max) {
      this.settings.width[key] = max;
    } else {
      this.settings.width[key] = value;
    }
  };

  setCurrentPage = (key: PageName) => {
    if (pagesNames.indexOf(key) !== -1) {
      this.currentPage = key;
    }
  };
}

export { PageName };
export default SidebarStore;
