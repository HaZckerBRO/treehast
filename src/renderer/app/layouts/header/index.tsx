import * as React from 'react';
import s from './index.module.scss';
import { Navigation } from '@layouts';

const Header: React.FC = () => {
  return (
    <div className={s.container}>
      <div>1</div>
      <Navigation />
      <div>3</div>
    </div>
  );
};

export default Header;
