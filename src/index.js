import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'index.css';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from 'configuration/firebaseConfig';
ReactDOM.render(
	<React.StrictMode>
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<Suspense fallback={<p>Cargando...</p>}>
				<App />
			</Suspense>
		</FirebaseAppProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
