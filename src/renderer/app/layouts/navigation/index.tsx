import * as React from 'react';
import { PathNames } from '@router';
import { useLocation } from 'react-router-dom';
import { NavItem } from '@components';
import { IconHome, IconStructure, IconTemplate } from '@icons';
import s from './index.module.scss';

const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={s.container}>
      <div className={s.colorHome}>
        <NavItem
          path={PathNames.Main}
          icon={<IconHome />}
          label="Главная"
          active={pathname === '/'}
        />
      </div>
      <div className={s.colorTemplate}>
        <NavItem
          path={PathNames.Templates}
          icon={<IconTemplate />}
          label="Шаблоны"
          active={pathname.startsWith(PathNames.Templates)}
        />
      </div>
      <div className={s.colorStructure}>
        <NavItem
          path={PathNames.Structure}
          icon={<IconStructure />}
          label="Структура"
          active={pathname.startsWith(PathNames.Structure)}
        />
      </div>
    </div>
  );
};

export default Navigation;
