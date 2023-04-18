import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); //this is the connection to index.html

root.render(
	<StrictMode>
		<h1>Todo List</h1>
		<App />
	</StrictMode>
);
