import { type FC, memo } from 'react';
import type { Order } from '../types';
import { Link } from 'react-router-dom';

export interface OrderListItemProps {
    order: Order;
}

const OrderListItem: FC<OrderListItemProps> = ({ order }) => {
    return (
        <div className='bg-gray-200 m-2 p-4 rounded-md font-medium text-lg shadow-sm hover:shadow-md transition-shadow'>
            <Link to={`/orders/${order.id}`} className='text-indigo-700 hover:text-indigo-800 font-bold'>
                Order # {order.id}
            </Link>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
                <p>Total: <span className="font-semibold text-black">${order.total}</span></p>
                <p>Items: <span className="font-semibold text-black">{order.totalProducts}</span></p>
            </div>
        </div>
    );
};

export default memo(OrderListItem);