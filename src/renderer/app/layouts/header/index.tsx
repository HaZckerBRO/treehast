import * as React from 'react';
import { Navigation } from '@layouts';
import { Logo } from '@components';
import s from './index.module.scss';

const Header: React.FC = () => {
  return (
    <div className={s.container}>
      <Logo />
      <Navigation />
      <div>3</div>
    </div>
  );
};

export default Header;
