# Working with Redux Toolkit

This is a simple web application that shows how to install and configure Redux Toolkit in React projects.

## Getting Started

1. Install the Redux Toolkit package.

```bash
$ npm install @reduxjs/toolkit react-redux
```
or

```bash
$ yarn add @reduxjs/toolkit react-redux
```

2. In the index.jsx file, add the following code.

```javascript
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/index-slice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);
```

3. Start adding the code neeeded for redux and data.
You can navigate to the src folder where you will find the code within the folders store and component.
