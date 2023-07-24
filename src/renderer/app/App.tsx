import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { AppRouter } from '@router';
import { Header, PageContent } from '@layouts';
import './variables.scss';
import './index.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <PageContent>
          <AppRouter />
        </PageContent>
      </div>
    </Router>
  );
};

export default App;
