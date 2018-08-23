import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Counter from './Component/Counter';

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
