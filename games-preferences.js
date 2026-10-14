/* Apply the saved theme before styles load to avoid a light flash. */
(() => {
    const root = document.documentElement;
    let theme = 'system';
    try {
        const saved = localStorage.getItem('games-theme');
        if (['system', 'light', 'dark'].includes(saved)) theme = saved;
    } catch (_) { /* Preferences still work when storage is unavailable. */ }
    root.dataset.theme = theme;
})();
