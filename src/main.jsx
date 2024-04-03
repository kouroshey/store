import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.jsx';
import { QueryProvider } from './lib/react-query/QueryProvider.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <RouterProvider router={router} />
  </QueryProvider>
);
