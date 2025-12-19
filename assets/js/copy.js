// Copy-to-clipboard helper for elements with .copy-btn
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".copy-btn").forEach((btn) => {
        btn.addEventListener("click", async () => {
            const text = btn.getAttribute("data-copy") || "";
            try {
                await navigator.clipboard.writeText(text);

                btn.classList.add("is-copied");
                const prevTitle = btn.title;
                btn.title = "Kopiert!";

                setTimeout(() => {
                    btn.classList.remove("is-copied");
                    btn.title = prevTitle || "Kopieren";
                }, 600);
            } catch (e) {
                const ta = document.createElement("textarea");
                ta.value = text;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand("copy");
                ta.remove();
            }
        });
    });
});
