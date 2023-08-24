import rootReducer from '../src/redux/reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#fff' },
    ],
  }
}

const store = createStore(rootReducer);

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <Story/>
      </MemoryRouter>
    </Provider>
  )
]