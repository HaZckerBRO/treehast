import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

enum PathNames {
  Main = '*',
  Structure = '/structure',
  Templates = '/templates',
}

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={PathNames.Main} element={<h1>Main</h1>} />
      <Route path={PathNames.Structure} element={<h1>Structure</h1>} />
      <Route path={PathNames.Templates} element={<h1>Templates</h1>} />
    </Routes>
  );
};

export { PathNames, AppRouter };
