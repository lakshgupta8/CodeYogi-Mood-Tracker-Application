import { type FC, memo } from 'react';
import type { Product } from '../types';

export interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <div className='bg-gray-200 m-2 p-4 rounded-md font-medium text-lg flex justify-between items-center shadow-sm'>
            <span>{product.title}</span>
            <span className='text-indigo-700 font-bold'>$ {product.price}</span>
        </div>
    );
};

export default memo(ProductCard);