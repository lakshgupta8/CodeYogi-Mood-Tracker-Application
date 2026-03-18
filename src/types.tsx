export interface Product {
    id: number;
    title: string;
    price: number;
}

export interface OrderItem {
    id: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
}
export interface Order {
    id: number;
    total: number;
    products: number[];
    discountedTotal: number;
    totalProducts: number;
    totalQuantity: number;
}

export type NormalisedOrder = {
    [id: number]: Order;
}

export type NormalisedProduct = {
    [id: number]: Product;
}

export type Moment = {
    intensity: number;
    when: Date;
}