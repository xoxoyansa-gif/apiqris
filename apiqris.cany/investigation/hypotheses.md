# Hypotheses

## hyp_1 (Supported)

apiqris.com is a statically generated website (built with Astro) containing 46 pages with inlined CSS, pure CSS radio tabs for code snippets, and self-contained vector SVGs/assets.

Prediction: All 46 routes and assets can be extracted, verified, and served completely static with 100% fidelity.

Supporting: ev_858b96ed4ba4f664f0144d04a844671f922f152ce39aed5cb58fac0f45010889

- Confirmed by analyzing DOM tree, HTTP headers, inlined styles, and zero external JS dependency.
## hyp_2 (Supported)

app.apiqris.com is a standalone React 18 Single Page Application (Vite bundle) containing registration (/daftar), login (/masuk), and full merchant portal routes.

Prediction: The SPA bundle assets (JS, CSS, static media) can be hosted and integrated under /app/ or /daftar/ so visitors can access the merchant portal.

Supporting: ev_cfc331dd6eb607e25bf0a032c578dbf890d8b8104687896b0b8842b880d472f6, ev_30a58c87161459b96341a471480f1656b848d435f28acbe58246dd44fc68e0e3

- Verified bundle structure and routes extracted from compiled bundle.
