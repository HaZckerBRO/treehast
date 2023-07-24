import * as React from 'react';
import { SidebarResizer } from '@components';
import s from './index.module.scss';

const Sidebar: React.FC = () => {
  return (
    <div className={s.container}>
      <SidebarResizer />
    </div>
  );
};

export default Sidebar;
