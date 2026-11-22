(() => {
  const stickers = [
    {src: 'assets/stickers/happy.webp', alt: 'happy'},
    {src: 'assets/stickers/crying.webp', alt: 'crying'},
    {src: 'assets/stickers/angry.webp', alt: 'angry'},
    {src: 'assets/stickers/hearts.webp', alt: 'hearts'},
    {src: 'assets/stickers/laugh.webp', alt: 'laughing'},
    {src: 'assets/stickers/rawr.webp', alt: 'rawr'},
    {src: 'assets/stickers/shocked.webp', alt: 'shocked'}
  ];
  const heroSticker = document.querySelector('#hero-sticker');
  const stickerButtons = [...document.querySelectorAll('.sticker-choice')];
  let current = 0;

  function showSticker(index) {
    current = index;
    heroSticker.classList.add('is-switching');
    const nextSticker = new Image();
    nextSticker.onload = () => {
      heroSticker.src = nextSticker.src;
      heroSticker.alt = 'LilRedFox sticker: ' + stickers[index].alt;
      requestAnimationFrame(() => heroSticker.classList.remove('is-switching'));
    };
    nextSticker.onerror = () => heroSticker.classList.remove('is-switching');
    nextSticker.src = stickers[index].src;
    stickerButtons.forEach((button, i) => {
      const active = i === index;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }
  stickerButtons.forEach((button) => button.addEventListener('click', () => {
    showSticker(Number(button.dataset.sticker));
  }));

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.setInterval(() => showSticker((current + 1) % stickers.length), 4800);
  }
})();
