import { Suspense } from 'react';
import './index.css';
import { useRoutes } from 'react-router-dom';
import routes from '~pages';
import { registerSW } from 'virtual:pwa-register';
import NavBar from './components/NavBar';

export default function App() {
  registerSW({ immediate: true });
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <NavBar></NavBar>
      <main className="py-16 min-h-screen h-1">{useRoutes(routes)}</main>
    </Suspense>
  );
}
