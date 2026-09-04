import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router doesn't scroll to a URL's hash fragment on navigation.
 * This scrolls to the matching element whenever the location changes,
 * so links like "/#work" work both from other pages and on load.
 */
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.slice(1);
    // Wait a tick for the target page's content to mount.
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 0);

    return () => clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}

export default ScrollToHash;
