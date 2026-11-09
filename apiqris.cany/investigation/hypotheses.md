# Hypotheses

## hyp_1 (Supported)

apiqris.com is a statically generated website (built with Astro) containing 46 pages with inlined CSS, pure CSS radio tabs for code snippets, and self-contained vector SVGs/assets.

Prediction: All 46 routes and assets can be extracted, verified, and served completely static with 100% fidelity.

Supporting: ev_858b96ed4ba4f664f0144d04a844671f922f152ce39aed5cb58fac0f45010889

- Confirmed by analyzing DOM tree, HTTP headers, inlined styles, and zero external JS dependency.
