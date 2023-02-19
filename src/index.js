import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './components/App';
import LandingPage from './components/LandingPage';
import Game from './components/Game';
import Lose from './components/Lose';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/landing', element: <LandingPage /> },
  { path: '/game', element: <Game /> },
  { path: '/lose', element: <Lose /> },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
