import { type FC, memo, useEffect } from 'react';
import axios from 'axios';

import type { Order, Product } from '../types';
import LoadingState from './LoadingState';
import ProductCard from './ProductCard';

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
    }, [orderId, orderDetailLoaded])

    return (
        <div className="py-8">

            <LoadingState isLoading={!order} skeletonClassName='w-full h-[600px]'>
                {order && (
                    <div className='bg-white shadow-lg border border-gray-100 rounded-xl overflow-hidden'>
                        <div className="bg-indigo-700 p-6 text-white">
                            <h1 className='font-bold text-3xl'>Order Detail # {orderId}</h1>
                            <p className="opacity-90 mt-1 text-lg">Detailed breakdown of your items and costs</p>
                        </div>

                        <div className="p-6">
                            <div className="gap-4 grid grid-cols-2 md:grid-cols-4 bg-gray-50 mb-8 p-4 border border-gray-100 rounded-lg">
                                <div>
                                    <p className="font-bold text-gray-500 text-xs uppercase">Total Items</p>
                                    <p className="font-bold text-xl">{order.totalProducts}</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-500 text-xs uppercase">Total Quantity</p>
                                    <p className="font-bold text-xl">{order.totalQuantity}</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-500 text-xs uppercase">Total Amount</p>
                                    <p className="font-bold text-indigo-700 text-xl">${order.total}</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-500 text-xs uppercase">Discounted Total</p>
                                    <p className="font-bold text-green-600 text-xl">${order.discountedTotal}</p>
                                </div>
                            </div>

                            <h2 className='mb-4 pb-2 border-b font-bold text-gray-800 text-xl'>Order Contents</h2>
                            <div className='gap-2 grid grid-cols-1 md:grid-cols-2'>
                                {products.map((p) => (
                                    <ProductCard key={p.id} product={p} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </LoadingState>
        </div>
    );
};

export default memo(OrderDetailPage);