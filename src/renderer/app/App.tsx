import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { AppRouter } from '@router';
import { RootStore } from '@store';
import { AppContext } from '@context';
import { Header, PageContent } from '@layouts';
import './variables.scss';
import './index.scss';

const App: React.FC = () => {
  return (
    <Router>
      <AppContext.Provider value={RootStore}>
        <div className="App">
          <Header />
          <PageContent>
            <AppRouter />
          </PageContent>
        </div>
      </AppContext.Provider>
    </Router>
  );
};

export default observer(App);
