import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { reducer, type State } from '../store';
import type { Decorator } from '@storybook/react';

export const ReduxDecorator = (initialState?: Partial<State>): Decorator => (Story) => {
  const store = createStore(reducer, initialState as any);
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};
