import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { SidebarResizer } from '@components';
import { useSidebarState } from './use-sidebar-state';
import s from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

const Sidebar: React.FC<Props> = ({ children }) => {
  const { width } = useSidebarState();

  return (
    <div id="sidebar" className={s.container} style={{ width }}>
      {children}
      <SidebarResizer />
    </div>
  );
};

export default observer(Sidebar);
