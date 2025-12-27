// Prefetch linked pages on hover/focus to smooth navigation flashes.
(() => {
    if (window.HTMLScriptElement && HTMLScriptElement.supports && HTMLScriptElement.supports("speculationrules")) {
        return;
    }

    const cache = new Set();

    const prefetch = (href) => {
        if (!href || href.startsWith("#") || cache.has(href)) return;
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = href;
        document.head.appendChild(link);
        cache.add(href);
    };

    const wireLinks = (selector) => {
        document.querySelectorAll(selector).forEach((anchor) => {
            const href = anchor.getAttribute("href");
            const handler = () => prefetch(href);
            anchor.addEventListener("mouseenter", handler);
            anchor.addEventListener("focus", handler);
        });
    };

    wireLinks(".main-nav a");
    wireLinks(".footer-nav a");
})();
