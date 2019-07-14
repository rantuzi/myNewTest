import React from 'react';
import ReactDOM from 'react-dom';
import './common/reset.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// const routeConfig = [
//     { path: '/',
//       component: App,
//       indexRoute: { component: Dashboard },
//       childRoutes: [
//         { path: 'about', component: About },
//         { path: 'inbox',
//           component: Inbox,
//           childRoutes: [
//             { path: '/messages/:id', component: Message },
//             { path: 'messages/:id',
//               onEnter: function (nextState, replaceState) {
//                 replaceState(null, '/messages/' + nextState.params.id)
//               }
//             }
//           ]
//         }
//       ]
//     }
//   ]
  
// React.render(<Router routes={routeConfig} />, document.body)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
