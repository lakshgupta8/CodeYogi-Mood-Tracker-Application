import { type FC, memo, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { ordersMapSelector, orderProductsSelector } from '../selectors/order';
import axios from 'axios';
import { orderDetailLoadedAction } from '../actions/order';
import Skeleton from '../components/Skeleton';

export const OrderDetailPage: FC = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const orderid = +params.orderId!;

    const ordersMap = useSelector(ordersMapSelector);
    const orderProducts = useSelector(orderProductsSelector);

    const order = ordersMap[orderid];
    const products = orderProducts[orderid];

    useEffect(() => {
        axios.get("https://dummyjson.com/carts/" + orderid).then((res) => {
            console.log(res.data)
            dispatch(orderDetailLoadedAction(res.data));
        })
    }, [orderid])

    if (!order) {
        return <Skeleton className='w-full h-screen' />;
    }

    return (
        <div>
            <Link to="/orders"><Button>Back</Button></Link>
            <div className='bg-gray-200 m-2 p-2 rounded-md font-medium text-lg text-black'>
                <p className='text-indigo-700 text-3xl font-bold mb-4'>Order Detail Page for order {orderid}</p>
                <p>Order number: {order.id}</p>
                <p>Total products: {order.totalProducts}</p>
                <p>Total quantity: {order.totalQuantity}</p>
                <p>Total Amount: {order.total}</p>
                <p>Discounted total: {order.discountedTotal}</p>
                <div className='font-bold mt-4'>Products:
                    {products.map((p) => (
                        <div key={p.id} className='bg-white m-2 p-2 rounded-md shadow-sm flex justify-between'>
                            <span>{p.title}</span>
                            <span className='text-indigo-700'>Rs. {p.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(OrderDetailPage);