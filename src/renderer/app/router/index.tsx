import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as pages from '@pages';

enum PathNames {
  Main = '*',
  Structure = '/structure',
  Templates = '/templates',
}

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={PathNames.Main} element={<pages.Main />} />
      <Route path={PathNames.Structure} element={<pages.Structure />} />
      <Route path={PathNames.Templates} element={<pages.Templates />} />
    </Routes>
  );
};

export { PathNames, AppRouter };
