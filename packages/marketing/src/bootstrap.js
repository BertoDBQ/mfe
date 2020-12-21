import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate, defaultHistory }) => {
    // default history is in development mode only
    const history = defaultHistory || createMemoryHistory();

    if (onNavigate) {
        history.listen(onNavigate);
    }
    
    ReactDOM.render(
        <App history={history} />,
        el
    )

    return {
        // location is parameter but destructuring out pathname
        onParentNavigate( {pathname: nextPathname }) {
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_marketing-dev-root');
    if (el) {
        mount(el, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };
