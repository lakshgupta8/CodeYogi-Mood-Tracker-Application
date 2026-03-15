import { type FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { State } from './store';
import { getProductsAction, productsLoadedAction } from './actions/product';
import Skeleton from './components/Skeleton';
import axios from 'axios';
import Button from './components/Button';
import { Link } from 'react-router-dom';

export interface ProductListPageProps {

}

const ProductListPage: FC<ProductListPageProps> = () => {
    const loading = useSelector((state: State) => state.products.loading);
    const products = useSelector((state: State) => state.products.products);
    const error = useSelector((state: State) => state.products.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsAction());
        axios.get('https://dummyjson.com/products/').then((response) => {
            dispatch(productsLoadedAction(response.data.products));
        });
    }, []);

    return (
        <div>
            <Link to="/"><Button>Back</Button></Link>
            {loading ? <Skeleton />
                : error ? <div>Error: {error}</div>
                    : <ul>
                        {products.map((product) =>
                            <li key={product.id}
                                className='bg-gray-200 m-2 p-2 rounded-md font-medium text-lg'
                            >
                                {product.title}
                            </li>
                        )}
                    </ul>
            }
        </div>
    );
};

export default memo(ProductListPage);