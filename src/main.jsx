import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { QueryProvider } from './lib/react-query/QueryProvider.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </QueryProvider>
);
