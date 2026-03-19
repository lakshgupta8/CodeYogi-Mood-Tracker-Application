import { type FC, memo, useState } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { sadButtonClicked } from '../actions/mood';

const SadIncrementor: FC = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(sadButtonClicked(quantity, new Date()));
  };

  return (
    <div className='flex flex-col gap-2 bg-gray-200 my-2 p-4 font-bold text-center'>
      <h3 className='my-2 text-indigo-700'>Are you sad?</h3>
      <input
        className='mx-auto p-2 border border-indigo-700 rounded-md w-1/4'
        type='number'
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <Button variant='secondary' onClick={increment}>Yes</Button>
    </div>
  );
};

export default memo(SadIncrementor);