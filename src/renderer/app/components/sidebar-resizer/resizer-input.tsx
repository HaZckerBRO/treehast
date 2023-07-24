import * as React from 'react';
import { AppContext } from '@context';
import { observer } from 'mobx-react-lite';

const ResizerInput: React.FC = () => {
  const { sidebar } = React.useContext(AppContext);
  const { currentPage, settings } = sidebar;

  const [width] = React.useState<number>(settings.width[currentPage]);
  const [inputValue, setInputValue] = React.useState(width);

  React.useEffect(() => {
    setInputValue(settings.width[currentPage]);
  }, [currentPage, settings.width[currentPage]]);

  const onInputClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numberValue = Number(value);

    if (!isNaN(numberValue)) {
      setInputValue(numberValue);
    }
  };

  const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numberValue = Number(value);

    if (!isNaN(numberValue)) {
      sidebar.setWidth(numberValue);
    }
  };

  return (
    <input
      value={inputValue}
      onClick={onInputClickHandler}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      placeholder={String(inputValue)}
    />
  );
};

export default observer(ResizerInput);
