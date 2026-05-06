// ── MEDIA ──────────────────────────────────────────
const PUBLIC_IMAGES = [
  '1LuWulTF4Mz-tHljBRVUrFNsvx8jJvBfw','1kwgQxhof_QZ6RbeD1bYMwtgd8sakzX-O',
  '18AfhfcyKDGeG27XRumtjYwQoJLijZA4w','1aDFIKi0uJ5jMCwZABeGVYGE8hsx1E1xQ',
  '1pcqCRqH_3TyK-JBv_aMT2L5T42ShOyG6','1s1bqdOR3hL4qxzqMngy53t61CoqmlgwD',
  '1PV84dThagXmDF7vXv-M6L9ST6g3CfgxM','1hToSHKPzYaaMA6_IG19F_ZoAHjvY3MWn',
  '1wugbhkRc8Z8iWTj5Z1nFggjPc_IjRQBl','1bD91Hnboohvd0em-rmcZoYYH4LH-BL-L',
  '16oWpREfupcuBwcLgcU51ULW18WzFWOpS','17E4zT7SNquGWjl6Ex4RM8Ft6rVKHv3gQ',
  '1ij4KUjc3WavOgWFwVfyoX6YzYYmO4QyD','18YJ3W7u2savhC5zSpwKCDTMF0dgLniXD',
  '1va7KayC1qaKVux3oIPo3Emp07KrBkmPM','1aPQGIuRh5H7yM43BBQG2om3E19DgIasJ',
  '1MUZUHG1QFPph6u4dl4JGhDcmIjy7Vygb','1YI9ZW2ImbQ8D48_BrVSjWKur7ZVqn2ti',
  '1yh1NJDomEWHdljIGDc7VHyPJhOGIaQhk','1LjldHB5TgogW1ktcL_c9ERQT9r83wi-R',
  '1ZDahhAj3Ef713HrfWfSw3tVXbYyivRok','1p4RB_dguJvknQUlAlrVx0hBsTHja9mvz',
  '1U0Ujdxt74fOfMLy8V2CGp43JOFln6YHy','11w9xGGs87kQwvOM9gcaauWTcORNM7GAU',
  '1kSuBTdCCm0xS6uMOdjg71UbYMyruziwb','1uYR4e4SBir8C1SKianrUMrY3b2QeDzIO',
  '17yE2vByTikpA5SczB5Uc8JIJiy1uxUjb','1T7MbKOVwwAYkDew_9IuPgJ5e0AAq69XP',
  '1LAOcvMQeDOqmyDDtxBKgh9T_lwZuvFrA'
];

const PUBLIC_VIDEOS = [
  '1-k9UgXr3NTiRRlfrrW4lvmzjqTc-WY7s','1eONeN-uiUdOfVjA7LZcAt4ED5FtLdsu1',
  '1U1WC3qDlKusaDqewjDW6FUVtjlKe69d3','1L27ktvikhz59jycEVIFOR77FvTlscflP',
  '1ryY8Lbv44TNu1VI1aCnu67ZHrH7EYebU','1pUzT4d9cvYeJC2is8ZDby9RNr8sZNrKc',
  '137uHLq7SErALgrF1pyjkzzzGvKqQMgzC','1l1rQ2Pct4ksf5FMqQBZkcUFzdsLmpM1x',
  '1s_2qwkty6xka-_cZixbdph3WrfkAM1sD','1OSYR3tuEq3VwrTkLXrIswnqn5cLGI0wY',
  '1uN0eWbeBZWfnETe8SfFeb39jT_RZ9Z4U','1N3rw144Gj2GI_dF6-C3XsljKnKmqUm8N',
  '1MKtKOJvB5OG8sVjBJ508YkVfGYRt5eBP','1F3SA8xVoW1Bwbi26Pc7cSk_NG7VaHeZc',
  '1yA28oQwcl0wkSOrQlsCsCdPOVjR9Kl_K','1AUZO9yLDaU42HQ7-pljFU7UxQ6Gh-9Oh',
  '1DSxCASqv3vViqF7VDMxsCHG8QvLtZR3z','1CSVCKfxXiHy_Ha5QLhx1JPZ95UMpZK29',
  '1ZwXe_d62AxxmEb5FwdgwxJs5Zudn0Yc-','1eftI8CwAW-IVIAkNDOshzc4AAaeCQapN',
  '11m-pHfDYWi9LxZ6zzYJvwifTjeWl1SgM'
];

const PRIV_IMAGES = [
  '1JAzb8GIAFEgH93e3YSXcrqnU1B50rgfC','1uu-PZkz3IWkWE25XyRfbBZDIxtQFrlB-',
  '1QzObxJy7bwOjuNcM0M7SDdkTzNLer0ta','1NM1CxzyDWt7Lm2XAO24jbnCkamn7fucf',
  '1eks7Unw8MdmYfkWhb97hRMiG37L4WU7a','1_oHGcjcXI90NuMmdjabIhAR_gpy1ru0z',
  '1BrBdVQZFuGR3GAX6wsCmgNxwgntquIP3','1c4mJ4xKQ2n0qkLc2GebIVqQgQdY5611B',
  '13M6XBv8QNslhgXko0_0r5L0yoJ0zfrjb','1XUxrNiCNDjPutz4DMspcavBT5wlA0BZu',
  '1-v_ZyCIb9RFSfmErGECjNxHn5M2akyqw','12A1ZZWps5bjLIue19CgxRZP7mQ5D8B6I',
  '1fRNo812l4gEvyDNk7UWCODRuAzIv7Cru'
];

const PRIV_VIDEOS = [
  '1EBKgzMU4-XiwERxoEWQIZRPqZ5FD65nV','1El7QXayYDeESW8zzKdbcCeTsAKDRMJyl',
  '1KTNcLUagD5NKBzwyxsnhWcIQXnaSI348','1QQ_Nqdzq7NgE939P_Qh3WOgIeuGjvl_P',
  '1z3Fet-Zk-eTvt_l1NXGLUDFT3dykLEe4','1uJa5fJ1iTKF7e1OmzosNWqAHIShsHlS6',
  '1ugYwJkjm1a8vqmi1ezdVv1HtBKeBxAkh','1Xe0kGOXilOsV4StbRXeG0_4ynpEQ92go',
  '1dy_5tfZO-YH2k0A-6kKuKhhCrQAQJtTG','1nkdfdUeLTZj2KOTphzla8LKLVfqW-AgH',
  '1YIf1nbYCuutYLvlcSB_55fTX93Sc4Wrv','1K22llL3Iu13UghyL6c6ZRY2weUYuU5_a',
  '10v1sJtXLKuyAsT-2QXeUNcYu5UtUwuvq','19w2z0VYRKm9e5a6kOvMSq5K3h1PRKlGA',
  '1jkcEoilgA26AAdgqsXkA_hcQyPxRrITU','1gHAaL9ZBjmnLjfTMXAaWMYjBAqBhGi0p'
];

// ── HELPERS ────────────────────────────────────────
function thumb(id)      { return `https://lh3.googleusercontent.com/d/${id}`; }
function vidPreview(id) { return `https://drive.google.com/file/d/${id}/preview`; }

// ── LIGHTBOX ───────────────────────────────────────
let lbItems = [], lbIdx = 0;

function openLb(items, i) {
  lbItems = items; lbIdx = i;
  renderLb();
  document.getElementById('lb').classList.add('open');
}

function renderLb() {
  const item = lbItems[lbIdx];
  const m = document.getElementById('lbMedia');
  if (item.type === 'img') {
    m.innerHTML = `<img class="lb-media" src="${thumb(item.id)}" alt="memory">`;
  } else {
    m.innerHTML = `<iframe class="lb-media" src="${vidPreview(item.id)}"
      style="width:min(92vw,640px);height:min(80vh,360px);border:none;border-radius:10px;"
      allowfullscreen></iframe>`;
  }
  const total = lbItems.length, shown = Math.min(total, 9), cur = Math.min(lbIdx, shown - 1);
  document.getElementById('lbDots').innerHTML = Array.from({length: shown}, (_,i) =>
    `<div class="lb-dot${i===cur?' on':''}"></div>`).join('');
  document.getElementById('lbCounter').textContent = `${lbIdx+1} / ${total}`;
}

function lbMove(dir) {
  lbIdx = (lbIdx + dir + lbItems.length) % lbItems.length;
  renderLb();
}

function closeLb() {
  document.getElementById('lb').classList.remove('open');
  document.getElementById('lbMedia').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const lb = document.getElementById('lb');
  if (lb) {
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  }
});

document.addEventListener('keydown', e => {
  if (!document.getElementById('lb')?.classList.contains('open')) return;
  if (e.key === 'ArrowRight') lbMove(1);
  if (e.key === 'ArrowLeft')  lbMove(-1);
  if (e.key === 'Escape')     closeLb();
});

// ── STARS ──────────────────────────────────────────
function makeStars(containerId = 'stars', count = 50) {
  const c = document.getElementById(containerId);
  if (!c) return;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const sz = Math.random() * 2 + 0.4;
    s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--d:${1.4+Math.random()*2.2}s;animation-delay:${Math.random()*2}s`;
    c.appendChild(s);
  }
}

// ── COUNTDOWN ──────────────────────────────────────
function startCountdown(elId = 'cd') {
  function tick() {
    const target = new Date('2026-05-06T00:00:00');
    const diff = target - new Date();
    const el = document.getElementById(elId);
    if (!el) return;
    if (diff <= 0) {
      el.innerHTML = '<div style="color:rgba(255,255,255,.8);font-family:\'Cormorant Garamond\',serif;font-size:20px;font-style:italic;">Happy 2nd Anniversary ♥</div>';
      return;
    }
    const d = Math.floor(diff/86400000);
    const h = Math.floor((diff%86400000)/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    el.innerHTML = [['days',d],['hrs',h],['min',m],['sec',s]].map(([l,v]) =>
      `<div class="cd-box"><span class="cd-n">${String(v).padStart(2,'0')}</span><span class="cd-l">${l}</span></div>`
    ).join('');
  }
  tick(); setInterval(tick, 1000);
}

// ── QR ─────────────────────────────────────────────
function makeQR(elId, url) {
  if (typeof QRCode === 'undefined') return;
  new QRCode(document.getElementById(elId), {
    text: url, width: 128, height: 128,
    colorDark: '#000', colorLight: '#fff',
    correctLevel: QRCode.CorrectLevel.H
  });
}

// ── PIN / UNLOCK ───────────────────────────────────
function initPin(ids, code, onSuccess) {
  ids.forEach((id, i, arr) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => {
      el.classList.toggle('ok', el.value !== '');
      if (el.value && i < arr.length - 1) document.getElementById(arr[i+1]).focus();
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !el.value && i > 0) document.getElementById(arr[i-1]).focus();
      if (e.key === 'Enter') checkPin(ids, code, onSuccess);
    });
  });
}

function checkPin(ids, code, onSuccess) {
  const entered = ids.map(id => document.getElementById(id).value).join('');
  const err = document.getElementById('pinErr');
  if (entered === code) {
    err?.classList.remove('show');
    onSuccess();
  } else {
    err?.classList.add('show');
    ids.forEach(id => { document.getElementById(id).value = ''; document.getElementById(id).classList.remove('ok'); });
    document.getElementById(ids[0]).focus();
  }
}

// ── GALLERY BUILDER ────────────────────────────────
function buildGallery(containerId, imgIds, vidIds, maxItems = 999) {
  const g = document.getElementById(containerId);
  if (!g) return;
  const imgs = imgIds.map(id => ({type:'img', id}));
  const vids = vidIds.map(id => ({type:'vid', id}));
  const items = [...imgs, ...vids].sort(() => Math.random() - .5).slice(0, maxItems);
  items.forEach((item, i) => {
    const d = document.createElement('div');
    d.className = 'g-item';
    d.innerHTML = `<img src="${thumb(item.id)}" loading="lazy" alt="memory">` +
      (item.type === 'vid' ? `<div class="vid-badge"><svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>vid</div>` : '');
    d.onclick = () => openLb(items, i);
    g.appendChild(d);
  });
}

function buildPrivateGallery(containerId) {
  const g = document.getElementById(containerId);
  if (!g) return;
  g.innerHTML = '';
  const items = [
    ...PRIV_IMAGES.map(id => ({type:'img', id})),
    ...PRIV_VIDEOS.map(id => ({type:'vid', id}))
  ];
  items.forEach((item, i) => {
    const d = document.createElement('div');
    d.className = 'priv-item';
    d.innerHTML = `<img src="${thumb(item.id)}" loading="lazy" alt="private">
      <div class="priv-overlay"><svg viewBox="0 0 24 24">${
        item.type === 'vid'
          ? '<polygon points="5 3 19 12 5 21 5 3"/>'
          : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      }</svg></div>`;
    d.onclick = () => openLb(items, i);
    g.appendChild(d);
  });
}

// ── NAV ACTIVE STATE ───────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.replace(/\/$/, '') || '/index';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/index';
    if (path.endsWith(href) || (path === '' && href === '/index') || (path === '/' && href === '/index')) {
      a.classList.add('active');
    }
  });
});
