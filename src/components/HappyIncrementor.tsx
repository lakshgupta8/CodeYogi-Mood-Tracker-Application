import { type FC, memo, useState } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { happyButtonClicked } from '../actions/mood';

const HappyIncrementor: FC = () => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(happyButtonClicked(quantity, new Date()));
    };

    return (
        <div>
            <h3>Are you happy?</h3>
            <input
                className='border border-gray-300 rounded-md'
                type='number'
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <Button className='bg-orange-700' onClick={increment}>Yes</Button>
        </div>
    );
};

export default memo(HappyIncrementor);