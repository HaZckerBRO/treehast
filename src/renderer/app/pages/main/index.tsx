import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { AppContext } from '@context';
import { Sidebar } from '@layouts';
import s from './index.module.scss';

const PageMain: FC = () => {
  const {
    sidebar: {
      currentPage,
      settings: { width },
    },
  } = React.useContext(AppContext);

  return (
    <div className={s.container}>
      <Sidebar />
      <div className={s.content} style={{ paddingLeft: width[currentPage] }}>
        main page
      </div>
    </div>
  );
};

export default observer(PageMain);
