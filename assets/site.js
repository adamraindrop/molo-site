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
    '90-Day Money Back Guarantee',
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
            '<img src="assets/library/logo/blue-logo-4x.png" alt="MOLO"></a>' +
          '<nav aria-label="Primary">' + links + '</nav>' +
          '<div class="hdr__right">' +
            '<a class="hdr__cart" href="cart.html" aria-label="Cart">' + CART_ICON + '</a>' +
            '<a class="hdr__cta" href="protocol.html">Start the Protocol</a>' +
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
  /* Five columns at 1.2/1/1/1.1/1.4, headings in the display face at 15px
     uppercase, links at 14px/500. Learn carries exactly two links and Help
     four; the mock does not list the guarantee separately. */
  function footer() {
    function col(head, links) {
      return '<div><p class="ftr__h">' + head + '</p><div class="ftr__links">' +
        links.map(function (l) { return '<a href="' + l[1] + '">' + l[0] + '</a>'; }).join('') +
        '</div></div>';
    }
    return '' +
    '<footer class="ftr">' +
      '<div class="ftrgrid">' +
        '<div>' +
          '<img class="ftr__logo" src="assets/library/logo/white-logo-4x.png" alt="MOLO">' +
          '<p class="ftr__tag">Nurse-formulated fertility support.</p>' +
        '</div>' +
        col('Shop', [['The Molo Fertility Protocol','protocol.html'],['Ovulation','ovulation.html'],['Prenatal','prenatal.html']]) +
        col('Learn', [['Our Story','our-story.html'],['FAQ','help.html#faq']]) +
        col('Help', [['Contact Us','help.html'],['Shipping','help.html#shipping'],
                     ['Returns and Refunds','help.html#returns'],['Manage Subscription','help.html#subscription']]) +
        '<div>' +
          '<p class="ftr__mailhead">Trying, and tired of guessing?</p>' +
          '<p class="ftr__mailsub">Once a week, one honest note about preparing your body. No hype, no pregnancy promises.</p>' +
          '<form class="ftr__mail" onsubmit="return false">' +
            '<label class="sr-only" for="ftr-email">Email address</label>' +
            '<input id="ftr-email" type="email" placeholder="Enter your email address" autocomplete="email">' +
            '<button type="submit">Join</button>' +
          '</form>' +
        '</div>' +
      '</div>' +
      '<div class="ftr__rule">' +
        '<p class="ftr__brandline">Empower your journey to motherhood.</p>' +
        '<p class="ftr__legal">\u2020These statements have not been evaluated by the Food and Drug Administration. ' +
          'This product is not intended to diagnose, treat, cure, or prevent any disease. Molo is a dietary ' +
          'supplement, not a fertility treatment, and is not a substitute for medical care. Always talk to your ' +
          'healthcare provider before starting any supplement, particularly during fertility treatment or ' +
          'pregnancy. Individual experiences vary.</p>' +
      '</div>' +
      '<div class="ftr__base">' +
        '<p>© 2026 Molo. Nurse formulated in the USA.</p>' +
        '<p><span>Refund policy</span><span>Privacy policy</span><span>Terms of service</span><span>Cancellation policy</span></p>' +
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
    var after = parseInt(bar.getAttribute('data-after') || '1600', 10);
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
      if (f) f.src = 'about:blank';   // stop playback
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

  /* Gallery: thumbs and the injected stage arrows drive one shared selection.
     The arrows are built here rather than written into the three PDPs because
     they do nothing without this script, and because all three use the same
     markup — one definition beats three copies drifting apart. */
  function galleries() {
    document.querySelectorAll('[data-gallery]').forEach(function (g) {
      var stage = g.querySelector('.stage');
      var stageImg = stage && stage.querySelector('img');
      var rail = g.querySelector('.galrail');
      var thumbs = [].slice.call(g.querySelectorAll('.thumb'));
      if (!stage || !stageImg || !thumbs.length) return;

      var current = 0;
      for (var i = 0; i < thumbs.length; i++) {
        if (thumbs[i].getAttribute('aria-selected') === 'true') { current = i; break; }
      }

      function select(next, moveFocus) {
        current = (next + thumbs.length) % thumbs.length;   // wraps both ways
        var active = thumbs[current];
        thumbs.forEach(function (x, i) {
          x.setAttribute('aria-selected', String(i === current));
        });
        var img = active.querySelector('img');
        if (img) {
          stageImg.src = img.src;
          stageImg.alt = active.getAttribute('data-alt') || '';
        }
        /* Below 640 the rail scrolls sideways, so an arrow that changed the
           stage but left the active thumb off-screen would look half-broken.
           Scroll the rail itself, never scrollIntoView — that would drag the
           whole page vertically as a side effect. */
        if (rail && rail.scrollWidth > rail.clientWidth) {
          /* Measured off rects, not offsetLeft: .gallery is position:sticky, so
             it is the offsetParent and offsetLeft is relative to it rather than
             to the rail's scroll content. That silently never scrolled. */
          var railBox = rail.getBoundingClientRect();
          var activeBox = active.getBoundingClientRect();
          var delta = (activeBox.left - railBox.left)
                    - (rail.clientWidth - activeBox.width) / 2;
          /* Instant, not smooth: the stage image swaps instantly, so a rail
             that glides afterwards reads as lag rather than polish. */
          rail.scrollLeft = rail.scrollLeft + delta;
        }
        if (moveFocus) active.focus();
      }

      thumbs.forEach(function (t, i) {
        t.addEventListener('click', function () { select(i); });
      });

      /* Flavour-linked gallery. A thumb opts in with data-flavor-src, a path
         template carrying a {flavor} token; a thumb without one is
         flavour-agnostic and stays put, which is how the Protocol offer shot
         and the founders panel survive the swap. Templates live per thumb
         rather than as one shared prefix because the Protocol bundle drives
         both Ovulation and Prenatal images from a single picker. */
      g.moloSetFlavor = function (slug, label) {
        thumbs.forEach(function (t) {
          var tpl = t.getAttribute('data-flavor-src');
          if (tpl) {
            var im = t.querySelector('img');
            if (im) im.src = tpl.replace(/\{flavor\}/g, slug);
          }
          var alt = t.getAttribute('data-alt-tpl');
          if (alt) t.setAttribute('data-alt', alt.replace(/\{flavor\}/g, label));
        });
        select(current);   /* repaint the stage from the thumb now showing */
      };

      /* A single image has nothing to page through. */
      if (thumbs.length < 2) return;

      function arrow(dir, label, path) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'stage__nav stage__nav--' + dir;
        b.setAttribute('aria-label', label);
        b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
          'stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" ' +
          'aria-hidden="true"><path d="' + path + '"/></svg>';
        b.addEventListener('click', function () {
          select(current + (dir === 'next' ? 1 : -1));
        });
        return b;
      }
      stage.appendChild(arrow('prev', 'Previous image', 'M15 5l-7 7 7 7'));
      stage.appendChild(arrow('next', 'Next image', 'M9 5l7 7-7 7'));

      /* Left/right keys on the rail, which is where a keyboard lands first. */
      if (rail) {
        rail.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowRight') { e.preventDefault(); select(current + 1, true); }
          else if (e.key === 'ArrowLeft') { e.preventDefault(); select(current - 1, true); }
        });
      }
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
            var tags = (item.getAttribute('data-chip-group') || '').split(/\s+/);
            item.hidden = key !== 'all' && tags.indexOf(key) === -1;
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
