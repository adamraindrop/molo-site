/* =============================================================================
   MOLO site — shared chrome and interactions

   Header and footer live here rather than in every page so seven pages stay in
   sync during iteration. Each page sets `data-page` on <body>; that drives the
   nav active state.

   Everything is vanilla and dependency-free. When this is ported to Shopify the
   header/footer become sections and these behaviours become theme JS; nothing
   here assumes a framework.
   ========================================================================== */
(function () {
  'use strict';

  var NAV = [
    ['protocol',  'The Protocol', 'protocol.html'],
    ['ovulation', 'Ovulation',    'ovulation.html'],
    ['prenatal',  'Prenatal',     'prenatal.html'],
    ['our-story', 'Our Story',    'our-story.html'],
    ['help',      'Help',         'help.html']
  ];

  var ANNOUNCEMENTS = [
    'Free shipping on every order',
    '90-Day Window Guarantee, opened bag is fine',
    'Nurse-formulated, third-party tested'
  ];

  var CART_ICON =
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M6 7h12l-1.2 12.2a1.6 1.6 0 0 1-1.6 1.4H8.8a1.6 1.6 0 0 1-1.6-1.4L6 7z"></path>' +
    '<path d="M9 10V6a3 3 0 0 1 6 0v4"></path></svg>';

  /* ---------- header ----------------------------------------------------- */
  function header(page) {
    var links = NAV.map(function (n) {
      var cur = n[0] === page ? ' aria-current="page"' : '';
      return '<a href="' + n[2] + '"' + cur + '>' + n[1] + '</a>';
    }).join('');

    var mobileLinks = NAV.map(function (n) {
      var cur = n[0] === page ? ' aria-current="page"' : '';
      return '<a href="' + n[2] + '"' + cur + '>' + n[1] + '</a>';
    }).join('');

    return '' +
      '<div class="hdrwrap">' +
        '<div class="announce"><img src="assets/molo-heart-mark.svg" alt="">' +
          '<span id="announce-msg">' + ANNOUNCEMENTS[0] + '</span></div>' +
        '<header class="hdr">' +
          '<a class="hdr__logo" href="index.html" aria-label="Molo home">' +
            '<img src="assets/molo-logo-primary-blue.svg" alt="MOLO"></a>' +
          '<nav aria-label="Primary">' + links + '</nav>' +
          '<div class="hdr__right">' +
            '<a class="hdr__cart" href="cart.html" aria-label="Cart">' + CART_ICON + '</a>' +
            '<a class="btn" style="font-size:12px;padding:12px 20px" href="protocol.html">Start the Protocol</a>' +
            '<button class="hdr__burger" id="burger" aria-expanded="false" aria-controls="mobnav" aria-label="Menu">' +
              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
            '</button>' +
          '</div>' +
        '</header>' +
        '<nav class="mobnav" id="mobnav" aria-label="Mobile" hidden>' + mobileLinks +
          '<a class="btn" href="protocol.html">Start the Protocol</a></nav>' +
      '</div>';
  }

  /* ---------- footer ----------------------------------------------------- */
  function footer() {
    return '' +
    '<footer class="ftr">' +
      '<div class="wrap ftrgrid">' +
        '<div>' +
          '<img src="assets/molo-logo-reverse-white.svg" alt="MOLO" style="width:112px;margin-bottom:16px">' +
          '<p style="color:rgba(255,255,255,.72);font-size:14.5px;max-width:26ch">' +
            'Fertility support made by women, for women. Nurse-formulated, third-party tested.</p>' +
        '</div>' +
        '<div><h4>Shop</h4><ul>' +
          '<li><a href="protocol.html">The Molo Protocol</a></li>' +
          '<li><a href="ovulation.html">Ovulation</a></li>' +
          '<li><a href="prenatal.html">Prenatal</a></li>' +
        '</ul></div>' +
        '<div><h4>Learn</h4><ul>' +
          '<li><a href="our-story.html">Our Story</a></li>' +
          '<li><a href="our-story.html#rebecca">Rebecca’s Story</a></li>' +
          '<li><a href="our-story.html#christina">The Nurse Who Wrote It</a></li>' +
          '<li><a href="help.html#faq">FAQ</a></li>' +
        '</ul></div>' +
        '<div><h4>Help</h4><ul>' +
          '<li><a href="help.html#contact">Contact Us</a></li>' +
          '<li><a href="help.html#shipping">Shipping</a></li>' +
          '<li><a href="help.html#returns">Returns and Refunds</a></li>' +
          '<li><a href="help.html#guarantee">90-Day Window Guarantee</a></li>' +
          '<li><a href="help.html#subscription">Manage Subscription</a></li>' +
        '</ul></div>' +
        '<div><h4>Trying, and tired of guessing?</h4>' +
          '<p style="color:rgba(255,255,255,.72);font-size:14.5px;max-width:32ch">' +
            'Once a week, one honest note about preparing your body. No hype, no pregnancy promises.</p>' +
          '<form class="ftr__mail" onsubmit="return false">' +
            '<label class="sr-only" for="ftr-email">Email address</label>' +
            '<input id="ftr-email" type="email" placeholder="Enter your email" autocomplete="email">' +
            '<button class="btn btn-cream" type="submit">Join</button>' +
          '</form>' +
        '</div>' +
      '</div>' +
      '<div class="wrap"><hr class="ftr__rule">' +
        '<p class="ftr__brandline">Empower your journey to motherhood.</p>' +
      '</div>' +
      '<div class="wrap ftr__legal" style="margin-top:22px">' +
        '<p>These statements have not been evaluated by the Food and Drug Administration. ' +
          'This product is not intended to diagnose, treat, cure, or prevent any disease.</p>' +
        '<p>Molo is a dietary supplement, not a fertility treatment, and is not a substitute for ' +
          'medical care. Always talk to your healthcare provider before starting any supplement, ' +
          'particularly during fertility treatment or pregnancy. Individual experiences vary.</p>' +
      '</div>' +
      '<div class="wrap" style="margin-top:20px;display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap">' +
        '<p style="font-size:12px;color:rgba(255,255,255,.6);margin:0;max-width:none">' +
          '© 2026 Molo. Nurse formulated in the USA.</p>' +
        '<p style="font-size:12px;color:rgba(255,255,255,.6);margin:0;max-width:none;display:flex;gap:18px;flex-wrap:wrap">' +
          '<span>Refund policy</span><span>Privacy policy</span><span>Terms of service</span></p>' +
      '</div>' +
    '</footer>';
  }

  /* ---------- mount ------------------------------------------------------ */
  function mount() {
    var page = document.body.getAttribute('data-page') || '';
    var h = document.getElementById('site-header');
    var f = document.getElementById('site-footer');
    if (h) h.innerHTML = header(page);
    if (f) f.innerHTML = footer();

    /* Announcement bar rotates every 4.5s. Paused for reduced-motion users,
       who otherwise get text swapping under them with no way to stop it. */
    var msg = document.getElementById('announce-msg');
    if (msg && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var i = 0;
      setInterval(function () {
        i = (i + 1) % ANNOUNCEMENTS.length;
        msg.textContent = ANNOUNCEMENTS[i];
      }, 4500);
    }

    var burger = document.getElementById('burger');
    var mobnav = document.getElementById('mobnav');
    if (burger && mobnav) {
      burger.addEventListener('click', function () {
        var open = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!open));
        mobnav.hidden = open;
      });
    }
  }

  /* ---------- shared behaviours ------------------------------------------ */

  /* Sticky CTA bar. Shows past the threshold on the element's own data-after,
     defaulting to 1200px as on the lander. */
  function stickyBar() {
    var bar = document.querySelector('.sticky');
    if (!bar) return;
    var after = parseInt(bar.getAttribute('data-after') || '1200', 10);
    var tick = function () { bar.classList.toggle('on', window.scrollY > after); };
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  /* Tabs: [data-tabs] wraps buttons with [data-tab] and panels with [data-panel]. */
  function tabs() {
    document.querySelectorAll('[data-tabs]').forEach(function (root) {
      var btns = root.querySelectorAll('[data-tab]');
      var panels = root.querySelectorAll('[data-panel]');
      btns.forEach(function (b) {
        b.addEventListener('click', function () {
          var key = b.getAttribute('data-tab');
          btns.forEach(function (x) { x.setAttribute('aria-selected', String(x === b)); });
          panels.forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== key; });
        });
      });
    });
  }

  /* Overlay open/close: [data-open="id"] opens, scrim / ✕ / Escape close. */
  function overlays() {
    function close(o) {
      o.hidden = true;
      document.body.style.overflow = '';
      var f = o.querySelector('iframe');
      if (f) f.src = '';          // stop playback
    }
    document.querySelectorAll('[data-open]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var o = document.getElementById(btn.getAttribute('data-open'));
        if (!o) return;
        var src = btn.getAttribute('data-video');
        if (src) {
          var f = o.querySelector('iframe');
          if (f) f.src = 'https://www.youtube-nocookie.com/embed/' + src + '?autoplay=1&rel=0';
        }
        o.hidden = false;
        document.body.style.overflow = 'hidden';
      });
    });
    document.querySelectorAll('.ovl').forEach(function (o) {
      o.addEventListener('click', function (e) { if (e.target === o) close(o); });
      var x = o.querySelector('.ovl__x');
      if (x) x.addEventListener('click', function () { close(o); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      document.querySelectorAll('.ovl:not([hidden])').forEach(close);
    });
  }

  /* Marquee: duplicate the track's children once so translateX(-50%) loops
     seamlessly, rather than hand-writing the list twice in every page. */
  function marquees() {
    document.querySelectorAll('.ticker__track,.badgerow__track').forEach(function (t) {
      t.innerHTML = t.innerHTML + t.innerHTML;
    });
  }

  /* Gallery: thumb click swaps the stage image. */
  function galleries() {
    document.querySelectorAll('[data-gallery]').forEach(function (g) {
      var stage = g.querySelector('.stage img');
      var thumbs = g.querySelectorAll('.thumb');
      thumbs.forEach(function (t) {
        t.addEventListener('click', function () {
          thumbs.forEach(function (x) { x.setAttribute('aria-selected', String(x === t)); });
          var img = t.querySelector('img');
          if (stage && img) { stage.src = img.src; stage.alt = t.getAttribute('data-alt') || ''; }
        });
      });
    });
  }

  /* Topic chips and any other single-select pressed group. */
  function chipGroups() {
    document.querySelectorAll('[data-chips]').forEach(function (g) {
      var chips = g.querySelectorAll('[aria-pressed]');
      chips.forEach(function (c) {
        c.addEventListener('click', function () {
          chips.forEach(function (x) { x.setAttribute('aria-pressed', String(x === c)); });
          var key = c.getAttribute('data-chip');
          if (!key) return;
          var scope = document.querySelector(g.getAttribute('data-chips')) || document;
          scope.querySelectorAll('[data-chip-group]').forEach(function (item) {
            item.hidden = key !== 'all' && item.getAttribute('data-chip-group') !== key;
          });
        });
      });
    });
  }

  function init() {
    mount();
    stickyBar(); tabs(); overlays(); marquees(); galleries(); chipGroups();
    if (window.MoloPage) window.MoloPage();   // per-page hook (buy box etc.)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
