import { type FC, memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';

export const OrderDetailPage: FC = () => {
    const params = useParams();
    const orderid = params.orderId;

    return (
        <div>
            <Link to="/orders"><Button>Back</Button></Link>
            <p className='font-medium text-lg'>Order Detail Page for order {orderid}</p>
        </div>
    );
};

export default memo(OrderDetailPage);