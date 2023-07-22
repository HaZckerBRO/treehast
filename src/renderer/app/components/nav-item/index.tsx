import * as React from 'react';
import cn from 'classnames';
import s from './index.module.scss';

interface Props {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<Props> = ({ icon, label, isActive }) => {
  return (
    <div className={cn(s.container, { [s.active]: isActive })}>
      {icon}
      <span className={s.label}>{label}</span>
    </div>
  );
};

export default NavItem;
