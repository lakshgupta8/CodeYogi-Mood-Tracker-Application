import { type FC, memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../components/Button';
import type { Order, Product } from '../types';
import LoadingState from '../components/LoadingState';
import ProductCard from '../components/ProductCard';

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
        <div className="max-w-4xl mx-auto p-4">
            <Button className="mb-6"><Link to="/orders">Back to Orders</Link></Button>
            
            <LoadingState isLoading={!order} skeletonClassName='w-full h-[600px]'>
                {order && (
                    <div className='bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100'>
                        <div className="bg-indigo-700 p-6 text-white">
                            <h1 className='text-3xl font-bold'>Order Detail # {orderId}</h1>
                            <p className="opacity-90 mt-1 text-lg">Detailed breakdown of your items and costs</p>
                        </div>
                        
                        <div className="p-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold">Total Items</p>
                                    <p className="text-xl font-bold">{order.totalProducts}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold">Total Quantity</p>
                                    <p className="text-xl font-bold">{order.totalQuantity}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold">Total Amount</p>
                                    <p className="text-xl font-bold text-indigo-700">${order.total}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold">Discounted Total</p>
                                    <p className="text-xl font-bold text-green-600">${order.discountedTotal}</p>
                                </div>
                            </div>

                            <h2 className='text-xl font-bold mb-4 text-gray-800 border-b pb-2'>Order Contents</h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
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