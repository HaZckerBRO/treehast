import * as React from 'react';
import { PathNames } from '@router';
import { NavItem } from '@components';
import { IconStructure, IconTemplate } from '@icons';
import s from './index.module.scss';

const Navigation: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.colorTemplate}>
        <NavItem
          path={PathNames.Templates}
          icon={<IconTemplate />}
          label="Шаблоны"
        />
      </div>
      <div className={s.colorStructure}>
        <NavItem
          path={PathNames.Structure}
          icon={<IconStructure />}
          label="Структура"
        />
      </div>
    </div>
  );
};

export default Navigation;
