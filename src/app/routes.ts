import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './components/Home';
import { ProductPage } from './components/ProductPage';
import { AthletesPage } from './components/AthletesPage';
import { SciencePage } from './components/SciencePage';
import { CartPage } from './components/CartPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'product', Component: ProductPage },
      { path: 'athletes', Component: AthletesPage },
      { path: 'science', Component: SciencePage },
      { path: 'cart', Component: CartPage },
    ],
  },
]);