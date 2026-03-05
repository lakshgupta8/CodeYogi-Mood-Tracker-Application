import { type FC, memo } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { sadButtonClicked } from '../actions';

const SadIncrementor: FC = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(sadButtonClicked);
  };

  return (
    <div>
      <h3>Are you sad?</h3>
      <Button className='bg-indigo-700' onClick={increment}>Yes</Button>
    </div>
  );
};

export default memo(SadIncrementor);