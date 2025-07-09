// Global hash navigation utility for consistent behavior across all pages

export const scrollToElement = (elementId: string, headerOffset: number = 100) => {
  const element = document.getElementById(elementId);
  if (element) {
    // Calculate position to show element just below the top
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const scrollToPosition = absoluteElementTop - headerOffset;
    
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }
};

export const setupHashNavigation = (
  onHashChange?: (hash: string) => void,
  headerOffset: number = 100
) => {
  const handleHashChange = () => {
    const hash = window.location.hash.substring(1); // Remove the #
    if (hash) {
      // Call custom handler if provided
      if (onHashChange) {
        onHashChange(hash);
      }
      
      // Scroll to element after a brief delay
      setTimeout(() => {
        scrollToElement(hash, headerOffset);
      }, 250);
    }
  };

  // Handle initial hash on page load
  setTimeout(() => {
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
      handleHashChange();
    }
  }, 300);

  // Listen for hash changes
  window.addEventListener('hashchange', handleHashChange);
  window.addEventListener('popstate', handleHashChange);

  // Return cleanup function
  return () => {
    window.removeEventListener('hashchange', handleHashChange);
    window.removeEventListener('popstate', handleHashChange);
  };
};