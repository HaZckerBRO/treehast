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
      <Route path={PathNames.Main} element={<h1>Main</h1>} />
      <Route path={PathNames.Structure} element={<pages.Structure />} />
      <Route path={PathNames.Templates} element={<h1>Templates</h1>} />
    </Routes>
  );
};

export { PathNames, AppRouter };
