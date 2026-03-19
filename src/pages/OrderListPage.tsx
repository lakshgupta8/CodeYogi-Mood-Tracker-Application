import { type FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOrdersAction, ordersLoadedAction } from '../actions/order';
import axios from 'axios';
import Skeleton from '../components/Skeleton';
import { ordersSelector, orderLoadingSelector } from '../selectors/order';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export const OrderListPage: FC = () => {
    const dispatch = useDispatch();
    const orders = useSelector(ordersSelector);
    const ordersLoading = useSelector(orderLoadingSelector);

    useEffect(() => {
        dispatch(loadOrdersAction());

        axios.get("https://dummyjson.com/carts").then((res) => {
            dispatch(ordersLoadedAction(res.data.carts));
        });
    }, []);

    return (
        <div>
            <Link to="/"><Button>Back</Button></Link>
            {ordersLoading && <Skeleton className='w-full h-screen' />}
            {orders.map((order) => (
                <div className='bg-gray-200 m-2 p-2 rounded-md font-medium text-lg' key={order.id}>
                    <Link to={`/orders/${order.id}`} className='text-indigo-700' >
                        <p>Order number: {order.id}</p>
                    </Link>
                    <p>Total: {order.total}</p>
                    <p>Products: {order.totalProducts}</p>
                </div>
            ))}
        </div>
    );
};

export default memo(OrderListPage);