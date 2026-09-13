(() => {
  const LIGHT = 'https://i.ibb.co/DPSRG0Z0/image.png';
  const DARK = 'https://i.ibb.co/Y4Ssn3gw/image.png';
  function isDark() { return document.body && document.body.classList.contains('dark'); }
  function sync() {
    const dark = isDark();
    document.querySelectorAll('img[data-mawaseel-logo]').forEach(img => {
      const forced = img.dataset.logoForce;
      img.src = forced === 'dark' ? DARK : forced === 'light' ? LIGHT : (dark ? DARK : LIGHT);
    });
  }
  function init() {
    sync();
    if(document.body) new MutationObserver(sync).observe(document.body, {attributes:true, attributeFilter:['class']});
    window.addEventListener('storage', sync);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
