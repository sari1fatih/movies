import Header from '../components/Header'
import { Provider } from 'react-redux';
import store from '../src/store.js';
export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Header />
            <Component {...pageProps} />
        </Provider>
    )
}