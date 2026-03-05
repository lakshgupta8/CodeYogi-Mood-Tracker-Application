import { type FC, memo } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { happyButtonClicked } from '../actions';

const HappyIncrementor: FC = () => {
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(happyButtonClicked);
    };

    return (
        <div>
            <h3>Are you happy?</h3>
            <Button className='bg-orange-700' onClick={increment}>Yes</Button>
        </div>
    );
};

export default memo(HappyIncrementor);