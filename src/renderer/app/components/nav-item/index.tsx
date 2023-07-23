import * as React from 'react';
import cn from 'classnames';
import s from './index.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

interface Props {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const NavItem: React.FC<Props> = ({ icon, label, path }) => {
  const { pathname } = useLocation(),
    isActive = React.useMemo(() => pathname.startsWith(path), [pathname]);

  return (
    <NavLink to={path} className={cn(s.container, { [s.active]: isActive })}>
      {icon}
      <span className={s.label}>{label}</span>
    </NavLink>
  );
};

export default NavItem;
