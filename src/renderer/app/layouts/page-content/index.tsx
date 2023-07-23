import * as React from 'react';
import s from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

const PageContent: React.FC<Props> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default PageContent;
