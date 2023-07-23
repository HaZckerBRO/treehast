import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { PathNames } from '@router';
import s from './index.module.scss';

interface Props {
  withText?: boolean;
}

const Logo: React.FC<Props> = ({ withText }) => {
  return (
    <NavLink to={PathNames.Main} className={s.container}>
      <span className={s.icon}>🤍</span>
      <span className={s.label}>{withText ? 'TreeHast' : null}</span>
    </NavLink>
  );
};

export default Logo;
