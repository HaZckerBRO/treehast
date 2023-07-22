import * as React from 'react';
import { NavItem } from '@components';
import { IconStructure, IconTemplate } from '@icons';
import s from './index.module.scss';

const Navigation: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.colorTemplate}>
        <NavItem icon={<IconTemplate />} label="Шаблоны" isActive />
      </div>
      <div className={s.colorStructure}>
        <NavItem icon={<IconStructure />} label="Структура" />
      </div>

      <NavItem icon={<IconStructure />} label="Структура" isActive />
      <NavItem icon={<IconStructure />} label="Структура" />
    </div>
  );
};

export default Navigation;
