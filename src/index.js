import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import Loader from './loader/Loader';
import { Provider } from 'react-redux';
import { store } from './redux/store';
const App = lazy(() => import("./App")); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loader/>}>
{/*   storedan ma'lumotlani olib, butun componentla bo'yicha tarqatib beradi */}
      <Provider store={ store }>
{/*     eng katta component */}
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
);