import { connect } from 'react-redux';
import { ordersMapSelector, orderProductsSelector } from '../selectors/order';
import { orderDetailLoadedAction } from '../actions/order';
import type { State } from '../store';
import OrderDetailPage, { type OrderDetailPageProps } from '../components/OrderDetailPage';

const mapStateToProps = (state: State, ownProps: Partial<OrderDetailPageProps>) => {
    const orderId = +ownProps.orderId!;
    return {
        order: ordersMapSelector(state)[orderId],
        products: orderProductsSelector(state)[orderId],
    };
};

const mapDispatchToProps = {
    orderDetailLoaded: orderDetailLoadedAction,
};

export const OrderDetailPageConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderDetailPage);
