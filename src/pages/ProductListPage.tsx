import { type FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAction, productsLoadedAction } from '../actions/product';
import axios from 'axios';

import { productsLoadingSelector, productsSelector } from '../selectors/product';
import ProductCard from '../components/ProductCard';
import LoadingState from '../components/LoadingState';

const ProductListPage: FC = () => {
    const dispatch = useDispatch();
    const loading = useSelector(productsLoadingSelector) as boolean;
    const products = useSelector(productsSelector) as any[];

    useEffect(() => {
        dispatch(loadProductsAction());
        axios.get('https://dummyjson.com/products/').then((res) => {
            dispatch(productsLoadedAction(res.data.products));
        });
    }, [dispatch]);

    return (
        <div className="py-8">
            <h1 className="mb-8 pb-4 border-b font-extrabold text-gray-900 text-3xl">Our Products</h1>

            <LoadingState isLoading={loading}>
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                    {products && products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </LoadingState>
        </div>
    );
};

export default memo(ProductListPage);