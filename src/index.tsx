import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {App} from './components/app';
import {ErrorBoundry} from "./components/error-boundry";
import {BookstoreService} from "./services/bookstore-service";
import {BookstoreProvider} from "./components/bookstore-service-context";

import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import {store} from "./store";
import {Header} from "./components/header";

const bookstoreService = new BookstoreService();

const ReduxApp = () => (
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreProvider value={bookstoreService}>
                <Router>
                    <Header/>
                    <App />
                </Router>
            </BookstoreProvider>
        </ErrorBoundry>
    </Provider>
);

ReactDOM.render(<ReduxApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
