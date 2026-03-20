import { type FC, memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../components/Button';
import type { Order, Product } from '../types';
import Skeleton from '../components/Skeleton';

export type OrderDetailPageProps = {
    order: Order;
    products: Product[];
    orderDetailLoaded: (order: Order) => void;
    orderId: number;
};

export const OrderDetailPage: FC<OrderDetailPageProps> = ({
    order,
    products,
    orderDetailLoaded,
    orderId
}: OrderDetailPageProps) => {
    useEffect(() => {
        axios.get("https://dummyjson.com/carts/" + orderId).then((res) => {
            orderDetailLoaded(res.data);
        })
    }, [orderId])

    if (!order) {
        return <Skeleton className='w-full h-screen' />;
    }

    return (
        <div>
            <Button><Link to="/orders">Back</Link></Button>
            <div className='bg-gray-200 m-2 p-2 rounded-md font-medium text-black text-lg'>
                <p className='mb-4 font-bold text-indigo-700 text-3xl'>Order Detail Page for order {orderId}</p>
                <p>Order number: {order.id}</p>
                <p>Total products: {order.totalProducts}</p>
                <p>Total quantity: {order.totalQuantity}</p>
                <p>Total Amount: {order.total}</p>
                <p>Discounted total: {order.discountedTotal}</p>
                <div className='mt-4 font-bold'>Products:
                    {products.map((p) => (
                        <div key={p.id} className='flex justify-between bg-white shadow-sm m-2 p-2 rounded-md'>
                            <span>{p.title}</span>
                            <span className='text-indigo-700'>$ {p.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(OrderDetailPage);