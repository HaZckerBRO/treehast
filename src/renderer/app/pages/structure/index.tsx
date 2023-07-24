import React, { FC } from 'react';
import { Sidebar } from '@layouts';
import s from './index.module.scss';

const PageStructure: FC = () => {
  return (
    <div className={s.container}>
      <Sidebar />
      <div className={s.content}>content of PageStructure</div>
    </div>
  );
};

export default PageStructure;
