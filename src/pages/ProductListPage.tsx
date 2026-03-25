import { type FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAction, productsLoadedAction } from '../actions/product';
import axios from 'axios';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
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
        <div className="max-w-4xl mx-auto p-4">
            <Button className="mb-6"><Link to="/">Back to Home</Link></Button>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Our Products</h1>
            
            <LoadingState isLoading={loading}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products && products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </LoadingState>
        </div>
    );
};

export default memo(ProductListPage);