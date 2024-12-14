import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'; 
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Documentation from './Pages/Documentations/Documentation';
import QuickStart from './Pages/Documentations/Overview/QuickStart/QuickStart';
import Installation from './Pages/Documentations/Overview/Installation/Installation';
import Usage from './Pages/Documentations/Overview/Usage/Usage';
import './index.css'; 
import WeatherProject from './Pages/Documentations/Projects/Weather/Weather';
import PasswordGenerator from './Pages/Documentations/Projects/Password Generator/password-generator';
import Todo from './Pages/Documentations/Projects/TODO list/Todo';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'services',
    element: <Services />,
  },
  {
    path: 'login',
    
  },
  {
    path: 'docs',
    element: <Documentation />,
    children: [
      { path: 'quick-start', element: <QuickStart /> },
      { path: 'installation', element: <Installation /> },
      { path: 'usage', element: <Usage /> },
      // Projects
      { path: 'weather', element: <WeatherProject /> },
      { path: 'password-generator', element: <PasswordGenerator/> },
      { path: 'todo-list', element: <Todo/>}
    ],
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
