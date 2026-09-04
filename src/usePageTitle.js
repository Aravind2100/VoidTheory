import { useEffect } from 'react';

const SITE_NAME = 'VoidTheory';

/**
 * Sets document.title for the current page. Pass just the page name
 * (e.g. "Work") — the site name is appended automatically. Pass `full`
 * to set an exact title with no suffix (used for the homepage, which
 * wants the site name first). Restores the previous title on unmount
 * so navigating away doesn't leave it stale.
 */
function usePageTitle(page, { full = false } = {}) {
  useEffect(() => {
    const previous = document.title;
    document.title = full ? page : page ? `${page} | ${SITE_NAME}` : SITE_NAME;
    return () => {
      document.title = previous;
    };
  }, [page, full]);
}

export default usePageTitle;
