import { type FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOrdersAction, ordersLoadedAction } from '../Actions/order';
import axios from 'axios';
import { ordersSelector, orderLoadingSelector } from '../Selectors/order';

import OrderListItem from '../Components/OrderListItem';
import LoadingState from '../Components/LoadingState';

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
        <div className="py-8">
            <h1 className="mb-8 pb-4 border-b font-extrabold text-gray-900 text-3xl">Your Orders</h1>

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