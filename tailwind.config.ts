@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}

* {
  box-sizing: border-box;
}

:root {
  --bg: 255 255 255;
  --fg: 10 10 12;
  --muted: 110 110 120;
  --card: 255 255 255;
  --border: 230 230 236;
  --ring: 60 60 80;
}

.dark {
  --bg: 10 10 12;
  --fg: 245 245 250;
  --muted: 170 170 185;
  --card: 18 18 22;
  --border: 42 42 52;
  --ring: 200 200 220;
}

body {
  background: rgb(var(--bg));
  color: rgb(var(--fg));
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}

::selection {
  background: rgba(120, 120, 160, 0.25);
}

/* Fundo “premium” com imagem + overlay
   Coloca uma imagem em: /public/images/banners/hero.jpg
   (se não tiver imagem, continua bonito com gradientes)
*/
.hero-shell {
  position: relative;
  min-height: 100vh;

  background:
    radial-gradient(900px 500px at 20% 10%, rgba(120, 120, 255, .18), transparent 60%),
    radial-gradient(700px 420px at 85% 25%, rgba(120, 255, 210, .12), transparent 55%),
    radial-gradient(900px 520px at 50% 100%, rgba(255, 255, 255, .06), transparent 55%),
    url("/images/banners/hero.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
}

.hero-shell::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  pointer-events: none;
}

.dark .hero-shell::before {
  background: rgba(10, 10, 12, 0.65);
}

/* Garante que o conteúdo fica acima do overlay */
.hero-shell > * {
  position: relative;
  z-index: 1;
}

/* utilitários */
.container-max {
  @apply mx-auto w-full max-w-6xl px-4;
}

.card {
  @apply rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-[0_10px_30px_rgba(0,0,0,.06)];
}

.dark .card {
  @apply shadow-[0_10px_30px_rgba(0,0,0,.25)];
}
