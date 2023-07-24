import * as React from 'react';
import { RootStore } from '@store';

const AppContext = React.createContext(RootStore);

export { AppContext };
