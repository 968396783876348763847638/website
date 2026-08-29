import { useCallback, useEffect, useState } from 'react';
import { DropOverlay } from './components/DropOverlay';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Nav } from './components/Nav';
import { UsePage } from './components/UsePage';

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash);
  const [dropping, setDropping] = useState(false);

  const isUsePage = route === '#use';

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('use-page-open', isUsePage);
    if (isUsePage) {
      window.scrollTo(0, 0);
      return;
    }

    const id = route.replace(/^#/, '');
    if (id && id !== 'home') {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isUsePage, route]);

  const showDrop = useCallback(() => setDropping(true), []);
  const hideDrop = useCallback(() => setDropping(false), []);

  useEffect(() => {
    const onMouseUp = () => {
      window.setTimeout(() => {
        if (!document.querySelector('.drag-cta:active')) {
          setDropping(false);
        }
      }, 80);
    };

    window.addEventListener('mouseup', onMouseUp);
    return () => window.removeEventListener('mouseup', onMouseUp);
  }, []);

  return (
    <>
      <Nav />
      {!isUsePage && <HomePage />}
      {isUsePage && <UsePage onShowDrop={showDrop} onHideDrop={hideDrop} />}
      <Footer />
      <DropOverlay visible={dropping} />
    </>
  );
}
