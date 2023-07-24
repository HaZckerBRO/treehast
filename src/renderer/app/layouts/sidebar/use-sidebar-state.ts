import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { PathNames } from '@router';
import { AppContext } from '@context';

const useSidebarState = () => {
  const { pathname } = useLocation();
  const { sidebar } = React.useContext(AppContext);
  const { settings, currentPage, setCurrentPage } = sidebar;

  React.useEffect(() => {
    let result = null;

    if (pathname.startsWith(PathNames.Templates)) {
      result = 'templates';
    } else if (pathname.startsWith(PathNames.Structure)) {
      result = 'structure';
    }

    setCurrentPage(result);
  }, [pathname]);

  const width = React.useMemo(() => {
    return settings.width[currentPage];
  }, [currentPage, settings.width[currentPage]]);

  return {
    width,
  };
};

export { useSidebarState };
