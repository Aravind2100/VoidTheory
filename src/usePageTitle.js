import { useEffect } from 'react';

const SITE_NAME = 'VoidTheory';

/**
 * Sets document.title and meta description dynamically per route for brand SEO optimization.
 */
function usePageTitle(page, { full = false, description = '' } = {}) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = full ? page : page ? `${page} | ${SITE_NAME}` : SITE_NAME;

    let metaDesc = document.querySelector('meta[name="description"]');
    const previousDesc = metaDesc ? metaDesc.getAttribute('content') : '';

    if (description && metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
      if (previousDesc && metaDesc) {
        metaDesc.setAttribute('content', previousDesc);
      }
    };
  }, [page, full, description]);
}

export default usePageTitle;
