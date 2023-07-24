import * as React from 'react';
import { AppContext } from '@context';
import ResizerInput from './resizer-input';
import s from './index.module.scss';

const SidebarResizer: React.FC = () => {
  const { sidebar } = React.useContext(AppContext);

  const [isResizing, setIsResizing] = React.useState(false);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;

    const newWidth = e.clientX;

    sidebar.setWidth(newWidth);
  };

  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className={s.container} onMouseDown={handleMouseDown}>
      <ResizerInput />
    </div>
  );
};

export default SidebarResizer;
