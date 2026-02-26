import React, {useEffect} from 'react';

export default function Root({children}) {
  useEffect(() => {
    const updateFavicon = () => {
      const isDark =
        document.documentElement.getAttribute('data-theme') === 'dark';

      const favicon = document.querySelector("link[rel='icon']");
      if (favicon) {
        favicon.setAttribute(
          'href',
          isDark
            ? '/img/SSLogoBlack.png'
            : '/img/SSLogoRed.png'
        );
      }
    };

    // Run once on load
    updateFavicon();

    // Observe theme changes
    const observer = new MutationObserver(updateFavicon);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}