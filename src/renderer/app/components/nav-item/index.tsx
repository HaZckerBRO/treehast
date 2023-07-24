import * as React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import s from './index.module.scss';

interface Props {
  icon: React.ReactNode;
  label: string;
  path: string;
  active?: boolean;
}

const NavItem: React.FC<Props> = ({ icon, label, path, active }) => {
  return (
    <NavLink to={path} className={cn(s.container, { [s.active]: active })}>
      {icon}
      <span className={s.label}>{label}</span>
    </NavLink>
  );
};

export default NavItem;
