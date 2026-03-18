import { type FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAction, productsLoadedAction } from '../actions/product';
import Skeleton from '../components/Skeleton';
import axios from 'axios';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { productsLoadingSelector, productsSelector } from '../selectors/product';


const ProductListPage: FC = () => {
    const dispatch = useDispatch();
    const loading = useSelector(productsLoadingSelector);
    const products = useSelector(productsSelector);

    useEffect(() => {
        dispatch(loadProductsAction());
        axios.get('https://dummyjson.com/products/').then((res) => {
            dispatch(productsLoadedAction(res.data.products));
        });
    }, []);

    return (
        <div>
            <Link to="/"><Button>Back</Button></Link>
            {loading && <Skeleton />}
            {products &&
                products.map((product) => (
                    <div key={product.id}
                        className='bg-gray-200 m-2 p-2 rounded-md font-medium text-lg'
                    >
                        {product.title} (Rs. {product.price})
                    </div>
                ))};
        </div>
    );
};

export default memo(ProductListPage);