// Forzar navegación para enlaces de menú que van a otras páginas (evita que el handler de smooth-scroll los bloquee)
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('#menu a');
    links.forEach(function (a) {
        a.addEventListener('click', function (ev) {
            var href = a.getAttribute('href') || '';
            // permitir navegación normal si no es un hash interno
            // (considera .html, rutas absolutas o URLs externas)
            var isHash = href.trim().startsWith('#');
            var isSamePageHash = isHash;
            if (!isSamePageHash) {
                // Ejecutar antes que otros manejadores (capture) y forzar navegación
                ev.stopImmediatePropagation();
                ev.preventDefault();
                // pequeña demora para que el flujo sea claro y evitar interferencias
                setTimeout(function () {
                    window.location.href = href;
                }, 0);
            }
        }, true); // capture = true para ejecutarse antes que handlers en bubble
    });
});