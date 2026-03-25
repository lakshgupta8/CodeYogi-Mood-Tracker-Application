import { type FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOrdersAction, ordersLoadedAction } from '../actions/order';
import axios from 'axios';
import { ordersSelector, orderLoadingSelector } from '../selectors/order';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import OrderListItem from '../components/OrderListItem';
import LoadingState from '../components/LoadingState';

export const OrderListPage: FC = () => {
    const dispatch = useDispatch();
    const orders = useSelector(ordersSelector) as any[];
    const ordersLoading = useSelector(orderLoadingSelector) as boolean;

    useEffect(() => {
        dispatch(loadOrdersAction());

        axios.get("https://dummyjson.com/carts").then((res) => {
            dispatch(ordersLoadedAction(res.data.carts));
        });
    }, [dispatch]);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <Button className="mb-6"><Link to="/">Back to Home</Link></Button>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Orders</h1>

            <LoadingState isLoading={ordersLoading} skeletonClassName='w-full h-[400px]'>
                <div className="flex flex-col gap-1">
                    {orders.map((order) => (
                        <OrderListItem key={order.id} order={order} />
                    ))}
                </div>
            </LoadingState>
        </div>
    );
};

export default memo(OrderListPage);