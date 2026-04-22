document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('.search input');
  const items = document.querySelectorAll('.course .bd ul li');
  const countEl = document.querySelector('.search-count');
  const noRes = document.querySelector('.no-results');
  if (!input || !items) return;

  function filter(q) {
    q = (q || '').trim().toLowerCase();
    let shown = 0;
    items.forEach(li => {
      const title = (li.dataset.title || li.textContent || '').toLowerCase();
      const ok = title.includes(q);
      li.style.display = ok ? '' : 'none';
      if (ok) shown++;
    });
    if (countEl) countEl.textContent = q ? `合う：${shown}` : '';
    if (noRes) noRes.style.display = (q && shown === 0) ? '' : 'none';
  }

  input.addEventListener('input', function () { filter(this.value); });
});