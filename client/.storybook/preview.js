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
    default: 'dark', // 기본 배경색을 어둡게 설정
    values: [
      { name: 'dark', value: '#888' }, // 어두운 배경색 추가
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