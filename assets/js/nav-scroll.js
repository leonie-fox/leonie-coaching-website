(() => {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const mq = window.matchMedia("(max-width: 800px)");
    let lastY = window.scrollY;
    let ticking = false;
    let offset = 0;

    const applyOffset = () => {
        header.style.transform = `translateY(-${offset}px)`;
    };

    const reset = () => {
        offset = 0;
        header.style.transform = "";
    };

    const update = () => {
        const currentY = window.scrollY;
        if (!mq.matches || currentY <= 0) {
            reset();
            lastY = currentY;
            return;
        }

        const delta = currentY - lastY;
        if (Math.abs(delta) < 2) {
            lastY = currentY;
            return;
        }

        const headerHeight = header.offsetHeight || 0;
        offset = Math.min(headerHeight, Math.max(0, offset + delta));
        applyOffset();
        lastY = currentY;
    };

    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            update();
            ticking = false;
        });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", () => {
        reset();
        lastY = window.scrollY;
    });
})();
