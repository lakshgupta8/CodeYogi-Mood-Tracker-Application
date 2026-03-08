import { type FC, memo, useState } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { sadButtonClicked } from '../actions';

const SadIncrementor: FC = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(sadButtonClicked(quantity));
  };

  return (
    <div>
      <h3>Are you sad?</h3>
      <input
        className='border border-gray-300 rounded-md'
        type='number'
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <Button className='bg-indigo-700' onClick={increment}>Yes</Button>
    </div>
  );
};

export default memo(SadIncrementor);