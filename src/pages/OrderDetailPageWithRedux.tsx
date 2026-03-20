import { connect } from 'react-redux';
import { ordersMapSelector, orderProductsSelector } from '../selectors/order';
import { orderDetailLoadedAction } from '../actions/order';
import type { State } from '../store';
import OrderDetailPage, { type OrderDetailPageProps } from './OrderDetailPage';

const mapStateToProps = (state: State, ownProps: OrderDetailPageProps) => {
    return {
        order: ordersMapSelector(state),
        products: orderProductsSelector(state),
    };
};

const mapDispatchToProps = {
    orderDetailLoaded: orderDetailLoadedAction,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderDetailPage);
