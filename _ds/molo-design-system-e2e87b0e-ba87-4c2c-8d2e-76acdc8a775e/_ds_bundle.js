/* @ds-bundle: {"format":4,"namespace":"MOLODesignSystem_e2e87b","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"HeartMark","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"EyebrowTag","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"CheckList","sourcePath":"components/content/CheckList.jsx"},{"name":"LegalNote","sourcePath":"components/content/CheckList.jsx"},{"name":"ProductCard","sourcePath":"components/content/ProductCard.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Switch","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"Container","sourcePath":"components/layout/Section.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"d957fe21c4d3","components/actions/IconButton.jsx":"f85465b2c8e8","components/brand/Logo.jsx":"6338e493b6e3","components/content/Badge.jsx":"9688369990a4","components/content/Card.jsx":"951be9851265","components/content/CheckList.jsx":"38740424cc9f","components/content/ProductCard.jsx":"3e4cbc51833d","components/forms/Checkbox.jsx":"f2a238c376e1","components/forms/Input.jsx":"66fb080453a8","components/layout/Section.jsx":"1e125a820ac7","scratch/local-bundle.js":"490ea3ff3a79","ui_kits/molotime/BundleScreen.jsx":"ff27a6c12fce","ui_kits/molotime/CartDrawer.jsx":"c5a80cb7db61","ui_kits/molotime/Chrome.jsx":"31659285851a","ui_kits/molotime/HomeScreen.jsx":"6440d11de003","ui_kits/molotime/ProductScreen.jsx":"a79698425236"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MOLODesignSystem_e2e87b = window.MOLODesignSystem_e2e87b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  sm: "12px 24px",
  md: "18px 32px",
  lg: "22px 44px"
};
const FS = {
  sm: "14px",
  md: "16px",
  lg: "18px"
};
const VARIANTS = {
  primary: {
    bg: "var(--molo-blue)",
    label: "var(--molo-white)",
    border: "var(--molo-blue)"
  },
  outline: {
    bg: "transparent",
    label: "var(--molo-blue)",
    border: "var(--molo-blue)"
  },
  onDark: {
    bg: "var(--molo-cream)",
    label: "var(--molo-blue)",
    border: "var(--molo-cream)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const hot = hover && !disabled;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: PAD[size] || PAD.md,
    width: fullWidth ? "100%" : "auto",
    borderRadius: "var(--molo-radius-button)",
    border: `2px solid ${hot ? "var(--molo-black)" : v.border}`,
    background: disabled ? "var(--molo-disabled)" : hot ? "var(--molo-black)" : v.bg,
    color: disabled ? "var(--molo-white)" : hot ? "var(--molo-white)" : v.label,
    fontFamily: "var(--molo-font-body)",
    fontWeight: 500,
    fontSize: FS[size] || FS.md,
    lineHeight: 1.19,
    letterSpacing: "var(--molo-tracking-button)",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background var(--molo-dur) var(--molo-ease), color var(--molo-dur) var(--molo-ease), border-color var(--molo-dur) var(--molo-ease)",
    ...style
  };
  const Tag = href && !disabled ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Round icon-only control. Matches the circular badge language in Molo's ad creative. */
function IconButton({
  children,
  variant = "primary",
  size = 52,
  label,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    primary: {
      bg: "var(--molo-blue)",
      fg: "var(--molo-white)",
      border: "var(--molo-blue)"
    },
    outline: {
      bg: "var(--molo-white)",
      fg: "var(--molo-blue)",
      border: "var(--molo-blue)"
    },
    soft: {
      bg: "var(--surface-tint-soft)",
      fg: "var(--molo-blue)",
      border: "var(--surface-tint-soft)"
    }
  };
  const s = skins[variant] || skins.primary;
  const hot = hover && !disabled;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "999px",
      border: `2px solid ${hot ? "var(--molo-black)" : s.border}`,
      background: disabled ? "var(--molo-gray-e5)" : hot ? "var(--molo-black)" : s.bg,
      color: disabled ? "var(--molo-gray-98)" : hot ? "var(--molo-white)" : s.fg,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "all var(--molo-dur) var(--molo-ease)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  reverseWhite: "molo-logo-reverse-white.svg",
  primaryBlue: "molo-logo-primary-blue.svg",
  ink: "molo-logo-ink.svg",
  monoWhite: "molo-logo-mono-white.svg",
  monoBlue: "molo-logo-mono-blue.svg",
  heart: "molo-heart-mark.svg"
};

/**
 * The MOLO lockup. Never retype the wordmark in Nexa Black — the logo has custom spacing.
 * `basePath` is the path from the current page to assets/logos.
 */
function Logo({
  variant = "primaryBlue",
  width = 160,
  basePath = "assets/logos",
  style,
  ...rest
}) {
  const file = FILES[variant] || FILES.primaryBlue;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${basePath}/${file}`,
    alt: "MOLO",
    style: {
      width,
      height: "auto",
      display: "block",
      ...style
    }
  }, rest));
}

/** Standalone heart mark. Avatars, favicons, bullets, patterns. */
function HeartMark({
  size = 28,
  basePath = "assets/logos",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${basePath}/molo-heart-mark.svg`,
    alt: "",
    style: {
      width: size,
      height: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo, HeartMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status/marketing badge. Blue by default; `soldout` uses the disabled gray. */
function Badge({
  children,
  tone = "blue",
  style,
  ...rest
}) {
  const tones = {
    blue: {
      background: "var(--molo-blue)",
      color: "var(--molo-white)"
    },
    soldout: {
      background: "var(--molo-badge-soldout)",
      color: "var(--molo-white)"
    },
    success: {
      background: "var(--molo-success-bg)",
      color: "var(--molo-success)"
    },
    error: {
      background: "var(--molo-error-bg)",
      color: "var(--molo-error)"
    },
    cream: {
      background: "var(--molo-cream)",
      color: "var(--molo-navy)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "7px 14px",
      borderRadius: "var(--molo-radius-pill)",
      fontFamily: "var(--molo-font-body)",
      fontWeight: 600,
      fontSize: "12px",
      letterSpacing: "var(--molo-tracking-eyebrow)",
      textTransform: "uppercase",
      ...(tones[tone] || tones.blue),
      ...style
    }
  }, rest), children);
}

/** Eyebrow tag that sits above a headline, as in Molo's ad creative. */
function EyebrowTag({
  children,
  tone = "heart",
  style,
  ...rest
}) {
  const tones = {
    heart: {
      background: "var(--molo-heart-flat)",
      color: "var(--molo-white)"
    },
    blue: {
      background: "var(--molo-blue)",
      color: "var(--molo-white)"
    },
    cream: {
      background: "var(--molo-cream)",
      color: "var(--molo-navy)"
    },
    outlineWhite: {
      background: "transparent",
      color: "var(--molo-white)",
      boxShadow: "inset 0 0 0 2px var(--molo-white)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "10px 22px",
      borderRadius: "var(--molo-radius-pill)",
      fontFamily: "var(--molo-font-body)",
      fontWeight: 600,
      fontSize: "14px",
      letterSpacing: "var(--molo-tracking-eyebrow)",
      textTransform: "uppercase",
      ...(tones[tone] || tones.heart),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge, EyebrowTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** 40px content block. White by default, cream or tint for warmth, navy for a dark block. */
function Card({
  children,
  tone = "white",
  padding = 32,
  radius = 40,
  shadow = true,
  style,
  ...rest
}) {
  const tones = {
    white: {
      background: "var(--surface-card)",
      color: "var(--text-body)"
    },
    cream: {
      background: "var(--molo-cream)",
      color: "var(--text-body)"
    },
    tint: {
      background: "var(--surface-tint-soft)",
      color: "var(--text-body)"
    },
    navy: {
      background: "var(--molo-navy)",
      color: "var(--molo-white)"
    },
    blue: {
      background: "var(--molo-blue)",
      color: "var(--molo-white)"
    },
    outline: {
      background: "var(--molo-white)",
      color: "var(--text-body)",
      border: "1px solid var(--border-subtle)"
    }
  };
  const t = tones[tone] || tones.white;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radius,
      padding,
      boxShadow: shadow && tone !== "outline" ? "var(--molo-shadow-card)" : "none",
      fontFamily: "var(--molo-font-body)",
      fontWeight: 500,
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/CheckList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circle-check benefit list. The single most-used content pattern in Molo's creative. */
function CheckList({
  items = [],
  tone = "light",
  size = "md",
  style,
  ...rest
}) {
  const dark = tone === "dark";
  const d = size === "lg" ? 34 : 26;
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: size === "lg" ? "20px" : "14px",
      ...style
    }
  }, rest), items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "flex-start",
      fontFamily: "var(--molo-font-body)",
      fontWeight: 500,
      fontSize: size === "lg" ? "20px" : "17.6px",
      lineHeight: 1.35,
      color: dark ? "var(--molo-white)" : "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: d,
    height: d,
    viewBox: "0 0 26 26",
    style: {
      flex: "0 0 auto",
      marginTop: "1px"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "13",
    cy: "13",
    r: "11.5",
    fill: "none",
    stroke: dark ? "#FFFFFF" : "var(--molo-blue)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 13.4l3.7 3.6L18.6 9",
    fill: "none",
    stroke: dark ? "#FFFFFF" : "var(--molo-heart-flat)",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, item))));
}

/** The FDA disclaimer. Required on any structure or function claim. */
function LegalNote({
  children,
  tone = "light",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      margin: 0,
      fontFamily: "var(--molo-font-body)",
      fontWeight: 500,
      fontSize: "var(--molo-fs-legal)",
      lineHeight: "var(--molo-lh-legal)",
      color: tone === "dark" ? "rgba(255,255,255,.7)" : "var(--text-legal)",
      ...style
    }
  }, rest), children || "†These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.");
}
Object.assign(__ds_scope, { CheckList, LegalNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CheckList.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductCard.jsx
try { (() => {
/** Product card: pack shot on a tint, Nexa Black title, benefit line, price, pill CTA. */
function ProductCard({
  image,
  name,
  benefit,
  price,
  subPrice,
  badge,
  cta = "Add to cart",
  onAdd,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "var(--molo-radius-block)",
      background: "var(--molo-white)",
      boxShadow: hover ? "var(--molo-shadow-lift)" : "var(--molo-shadow-card)",
      transform: hover ? "translateY(-4px)" : "none",
      transition: "transform var(--molo-dur) var(--molo-ease), box-shadow var(--molo-dur) var(--molo-ease)",
      overflow: "hidden",
      fontFamily: "var(--molo-font-body)",
      fontWeight: 500,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--surface-tint-soft)",
      padding: "20px",
      display: "grid",
      placeItems: "center"
    }
  }, badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 20,
      left: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge)) : null, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: "100%",
      maxWidth: 260,
      display: "block"
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 28px 28px",
      display: "grid",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--molo-font-display)",
      fontWeight: 400,
      fontSize: "var(--molo-fs-h4)",
      lineHeight: 1.2,
      color: "var(--text-body)",
      textTransform: "uppercase",
      margin: 0
    }
  }, name), benefit ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15px",
      lineHeight: 1.4,
      color: "var(--text-body)"
    }
  }, benefit) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "10px",
      marginTop: "4px"
    }
  }, price ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--molo-font-display)",
      fontSize: "22px",
      color: "var(--molo-blue)"
    }
  }, price) : null, subPrice ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-muted)"
    }
  }, subPrice) : null), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    fullWidth: true,
    onClick: onAdd,
    style: {
      marginTop: "8px"
    }
  }, cta)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const row = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  fontFamily: "var(--molo-font-body)",
  fontWeight: 500,
  fontSize: "16px",
  color: "var(--text-body)",
  cursor: "pointer"
};
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      ...row,
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: "24px",
      height: "24px",
      flex: "0 0 auto",
      borderRadius: "8px",
      border: `2px solid ${checked ? "var(--molo-blue)" : "var(--border-strong)"}`,
      background: checked ? "var(--molo-blue)" : "var(--molo-white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--molo-dur) var(--molo-ease)"
    }
  }, checked ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "11",
    viewBox: "0 0 14 11",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5.5l4 4L13 1.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), label);
}
function Radio({
  label,
  checked,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      ...row,
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(true),
    style: {
      width: "24px",
      height: "24px",
      flex: "0 0 auto",
      borderRadius: "999px",
      border: `2px solid ${checked ? "var(--molo-blue)" : "var(--border-strong)"}`,
      background: "var(--molo-white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--molo-dur) var(--molo-ease)"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "12px",
      height: "12px",
      borderRadius: "999px",
      background: "var(--molo-blue)"
    }
  }) : null), label);
}
function Switch({
  label,
  checked,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      ...row,
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: "52px",
      height: "30px",
      flex: "0 0 auto",
      borderRadius: "999px",
      background: checked ? "var(--molo-blue)" : "var(--molo-gray-ca)",
      padding: "3px",
      display: "inline-flex",
      justifyContent: checked ? "flex-end" : "flex-start",
      transition: "background var(--molo-dur) var(--molo-ease)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "24px",
      height: "24px",
      borderRadius: "999px",
      background: "var(--molo-white)",
      boxShadow: "0 1px 3px rgba(4,36,54,.25)"
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox, Radio, Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const field = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "var(--molo-radius-input)",
  border: "1px solid var(--border-strong)",
  background: "var(--molo-white)",
  color: "var(--text-input)",
  fontFamily: "var(--molo-font-body)",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: 1.3,
  outline: "none"
};
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "grid",
      gap: "8px",
      fontFamily: "var(--molo-font-body)",
      fontWeight: 500
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...field,
      borderColor: error ? "var(--molo-error)" : focus ? "var(--molo-blue)" : "var(--border-strong)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      ...style
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--molo-error)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
function Select({
  label,
  options = [],
  hint,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "grid",
      gap: "8px",
      fontFamily: "var(--molo-font-body)",
      fontWeight: 500
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...field,
      appearance: "none",
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='9'><path d='M1 1l6 6 6-6' fill='none' stroke='%23042436' stroke-width='2' stroke-linecap='round'/></svg>\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 16px center",
      paddingRight: "44px",
      borderColor: focus ? "var(--molo-blue)" : "var(--border-strong)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === "string" ? o : o.value,
    value: typeof o === "string" ? o : o.value
  }, typeof o === "string" ? o : o.label))), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-bleed color band. White -> tint -> white alternation is the site's dominant rhythm. */
function Section({
  children,
  tone = "white",
  pattern = false,
  patternSrc = "assets/images/molo-floral-pattern-blue-3840.jpg",
  paddingY = 96,
  style,
  innerStyle,
  ...rest
}) {
  const tones = {
    white: {
      background: "var(--molo-white)",
      color: "var(--text-body)"
    },
    cream: {
      background: "var(--molo-cream)",
      color: "var(--text-body)"
    },
    tint: {
      background: "var(--surface-tint-soft)",
      color: "var(--text-body)"
    },
    skyLight: {
      background: "var(--molo-sky-light)",
      color: "var(--molo-navy)"
    },
    blue: {
      background: "var(--molo-blue)",
      color: "var(--molo-white)"
    },
    navy: {
      background: "var(--molo-navy)",
      color: "var(--molo-white)"
    },
    accent: {
      background: "var(--molo-bubblegum)",
      color: "var(--molo-navy)"
    }
  };
  const t = tones[tone] || tones.white;
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: "relative",
      padding: `${paddingY}px 24px`,
      ...t,
      ...(pattern ? {
        backgroundImage: `linear-gradient(${t.background === "var(--molo-navy)" ? "rgba(25,35,51,.86)" : "rgba(49,128,226,.84)"}, ${t.background === "var(--molo-navy)" ? "rgba(25,35,51,.86)" : "rgba(49,128,226,.84)"}), url(${patternSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--molo-container)",
      margin: "0 auto",
      ...innerStyle
    }
  }, children));
}

/** 1320px centered container. */
function Container({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      maxWidth: "var(--molo-container)",
      margin: "0 auto",
      padding: "0 24px",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Section, Container });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// scratch/local-bundle.js
try { (() => {
// Local stand-in for the compiled _ds_bundle.js, for previewing before the compiler runs.
// Set window.__DS_ROOT to the relative path from the page to the project root (default "../").
(async function () {
  const root = window.__DS_ROOT || "../";
  const files = ["components/actions/Button.jsx", "components/actions/IconButton.jsx", "components/forms/Input.jsx", "components/forms/Checkbox.jsx", "components/content/Card.jsx", "components/content/Badge.jsx", "components/content/CheckList.jsx", "components/content/ProductCard.jsx", "components/layout/Section.jsx", "components/brand/Logo.jsx"];
  const NS = window.MOLODesignSystem_e2e87b = window.MOLODesignSystem_e2e87b || {};
  for (const f of files) {
    let src = await (await fetch(root + f)).text();
    src = src.replace(/^import[^\n]*\n/gm, "");
    const names = [];
    src = src.replace(/export function (\w+)/g, (m, n) => {
      names.push(n);
      return "function " + n;
    });
    const code = Babel.transform(src, {
      presets: ["react"]
    }).code + "\nreturn {" + names.join(",") + "};";
    const out = new Function("React", "Button", "Badge", code)(window.React, NS.Button, NS.Badge);
    Object.assign(NS, out);
  }
  for (const f of window.__DS_EXTRA || []) {
    const src = await (await fetch(f)).text();
    const code = Babel.transform(src, {
      presets: ["react"]
    }).code;
    new Function(code)();
  }
  window.dispatchEvent(new Event("ds-ready"));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "scratch/local-bundle.js", error: String((e && e.message) || e) }); }

// ui_kits/molotime/BundleScreen.jsx
try { (() => {
const {
  Button,
  EyebrowTag,
  CheckList,
  LegalNote,
  Card,
  Section,
  Select,
  Input
} = window.MOLODesignSystem_e2e87b;

/** Protocol builder: the quiz-to-bundle landing surface. */
function BundleScreen({
  onAdd
}) {
  const [stage, setStage] = React.useState(0);
  const stages = ["Trying to conceive", "In an IVF cycle", "Newly pregnant"];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--molo-sky-light)",
      padding: "76px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--molo-container)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowTag, {
    tone: "blue"
  }, "The Molo protocol"), /*#__PURE__*/React.createElement("h1", {
    style: {
      textTransform: "uppercase",
      margin: "20px 0 16px",
      fontSize: "56px",
      lineHeight: 1.05
    }
  }, "Two stick packs. Ninety days. One glass of water."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px",
      lineHeight: 1.35,
      maxWidth: "38ch",
      margin: "0 0 26px"
    }
  }, "Answer one question and we will tell you which two formulas to start on, and when to switch."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "12px",
      maxWidth: 440
    }
  }, stages.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setStage(i),
    style: {
      textAlign: "left",
      borderRadius: "24px",
      padding: "18px 22px",
      cursor: "pointer",
      background: i === stage ? "var(--molo-blue)" : "#fff",
      color: i === stage ? "#fff" : "var(--text-body)",
      border: "2px solid var(--molo-blue)",
      fontFamily: "var(--molo-font-body)",
      fontWeight: 500,
      fontSize: "17.6px"
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--molo-radius-block)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.IMG + "/rebecca-with-newborn-zadie.png",
    alt: "Rebecca Zamolo with her newborn daughter",
    style: {
      width: "100%",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "white",
    paddingY: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "48px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      textTransform: "uppercase",
      marginBottom: "16px"
    }
  }, "Your protocol: Conception plus Prenatal"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17.6px",
      lineHeight: 1.35,
      maxWidth: "46ch",
      marginBottom: "22px"
    }
  }, "Conception in the morning for the ninety day egg cycle, Prenatal at night so the switch at a positive test is already handled. Sixty stick packs a month, no pill count."), /*#__PURE__*/React.createElement(CheckList, {
    items: ["Conception, 30 stick packs, sweet orange", "Prenatal, 30 stick packs, sweet orange", "Save 20% versus buying separately†"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "center",
      marginTop: "26px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onAdd({
      key: "bundle",
      name: "Conception + Prenatal protocol",
      price: "$70",
      image: window.IMG + "/two-pouch-flatlay-citrus-herbs.png"
    })
  }, "Add the protocol, $70"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-muted)"
    }
  }, "$88 bought separately")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/React.createElement(LegalNote, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--molo-radius-block)",
      overflow: "hidden",
      background: "var(--surface-tint-soft)",
      padding: "20px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.IMG + "/two-pouch-flatlay-citrus-herbs.png",
    alt: "Conception and Prenatal stick pack bags",
    style: {
      width: "100%",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "cream",
    paddingY: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "24px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "white",
    padding: 32
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      textTransform: "uppercase",
      marginBottom: "14px"
    }
  }, "Remind me to finish it"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17.6px",
      lineHeight: 1.35,
      marginBottom: "18px"
    }
  }, "The hard part is week four, not day one. We will text you on the days people quit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "12px",
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@email.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Where you are starting",
    options: stages
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Send my reminders"))), /*#__PURE__*/React.createElement(Card, {
    tone: "navy",
    padding: 32
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "#fff",
      textTransform: "uppercase",
      marginBottom: "14px"
    }
  }, "Nurse formulated"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17.6px",
      lineHeight: 1.35,
      color: "rgba(255,255,255,.88)",
      marginBottom: "18px"
    }
  }, "Christina Westbrook, MBA MSN, is a certified fertility nurse. Every dose on the bag is one she would read out loud to a patient."), /*#__PURE__*/React.createElement(CheckList, {
    tone: "dark",
    items: ["Doses printed, no proprietary blends", "Third party tested", "Gluten free, vegetarian, non GMO"]
  })))));
}
Object.assign(window, {
  BundleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/molotime/BundleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/molotime/CartDrawer.jsx
try { (() => {
const {
  Button,
  LegalNote,
  Badge
} = window.MOLODesignSystem_e2e87b;

/** Slide-over bag. 24px drawer radius on the inner corners. */
function CartDrawer({
  open,
  items,
  onClose,
  onRemove
}) {
  const total = items.reduce((n, i) => n + i.amount, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 40,
      pointerEvents: open ? "auto" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(4,36,54,.45)",
      opacity: open ? 1 : 0,
      transition: "opacity var(--molo-dur) var(--molo-ease)"
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      height: "100%",
      width: 420,
      background: "#fff",
      borderRadius: "var(--molo-radius-drawer) 0 0 var(--molo-radius-drawer)",
      boxShadow: "var(--molo-shadow-lift)",
      transform: open ? "translateX(0)" : "translateX(100%)",
      transition: "transform var(--molo-dur-slow) var(--molo-ease)",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--molo-font-body)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 28px",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      textTransform: "uppercase"
    }
  }, "Your bag"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close bag",
    style: {
      width: 40,
      height: 40,
      borderRadius: "999px",
      border: "1px solid var(--border-subtle)",
      background: "#fff",
      cursor: "pointer",
      fontSize: "16px",
      color: "var(--text-body)"
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "22px 28px",
      display: "grid",
      gap: "18px",
      alignContent: "start"
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17.6px",
      color: "var(--text-muted)"
    }
  }, "Nothing here yet. Pick a stage and we will build the protocol around it.") : items.map((i, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      display: "grid",
      gridTemplateColumns: "88px 1fr",
      gap: "16px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "24px",
      background: "var(--surface-tint-soft)",
      padding: "8px",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: i.image,
    alt: i.name,
    style: {
      width: "100%",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--molo-font-display)",
      fontSize: "18px",
      textTransform: "uppercase"
    }
  }, i.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      color: "var(--text-muted)",
      margin: "4px 0 6px"
    }
  }, i.sub ? "Subscription, 15% off" : "One time", i.shaker ? " · with shaker" : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--molo-font-display)",
      fontSize: "18px",
      color: "var(--molo-blue)"
    }
  }, "$", i.amount.toFixed(2)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(idx),
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      fontSize: "14px",
      color: "var(--text-muted)",
      textDecoration: "underline",
      fontFamily: "var(--molo-font-body)",
      fontWeight: 500
    }
  }, "Remove")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 28px",
      borderTop: "1px solid var(--border-subtle)",
      display: "grid",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "17.6px"
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--molo-font-display)",
      fontSize: "24px",
      color: "var(--molo-blue)"
    }
  }, "$", total.toFixed(2))), total >= 50 ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Free shipping unlocked") : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-muted)"
    }
  }, "$", (50 - total).toFixed(2), " to free shipping"), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    disabled: items.length === 0
  }, "Checkout"), /*#__PURE__*/React.createElement(LegalNote, null))));
}
Object.assign(window, {
  CartDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/molotime/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/molotime/Chrome.jsx
try { (() => {
const {
  Button,
  IconButton,
  Logo,
  HeartMark,
  Badge,
  EyebrowTag,
  CheckList,
  LegalNote,
  Card,
  Section,
  Container,
  Input
} = window.MOLODesignSystem_e2e87b;
const ASSETS = "../../assets";
const LOGOS = ASSETS + "/logos";
const IMG = ASSETS + "/images";
const PATTERN = IMG + "/molo-floral-pattern-blue-3840.jpg";
const NAV = ["Shop", "Protocol", "Our story", "Nurse formulated", "Reviews"];
function AnnouncementBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--molo-navy)",
      color: "#fff",
      fontFamily: "var(--molo-font-body)",
      fontWeight: 500,
      fontSize: "13px",
      letterSpacing: ".06em",
      textTransform: "uppercase",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      padding: "10px 16px"
    }
  }, /*#__PURE__*/React.createElement(HeartMark, {
    size: 14,
    basePath: LOGOS
  }), "Free shipping over $50. Subscribe and save 15%.");
}
function Header({
  onNav,
  active,
  cartCount,
  onCart
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "#fff",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--molo-container)",
      margin: "0 auto",
      padding: "18px 24px",
      display: "flex",
      alignItems: "center",
      gap: "32px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home");
    },
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "primaryBlue",
    width: 132,
    basePath: LOGOS
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "26px",
      flex: 1
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(n === "Protocol" ? "bundle" : n === "Shop" ? "product" : "home");
    },
    style: {
      whiteSpace: "nowrap",
      fontFamily: "var(--molo-font-body)",
      fontWeight: 500,
      fontSize: "15px",
      color: active === n ? "var(--molo-blue)" : "var(--text-body)",
      textDecoration: "none"
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    onClick: () => onNav("bundle")
  }, "Take the quiz"), /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    style: {
      position: "relative",
      width: 48,
      height: 48,
      borderRadius: "999px",
      border: "2px solid var(--molo-blue)",
      background: "#fff",
      color: "var(--molo-blue)",
      cursor: "pointer",
      fontFamily: "var(--molo-font-body)",
      fontWeight: 600,
      fontSize: "14px"
    }
  }, "Bag", cartCount > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -6,
      right: -6,
      minWidth: 22,
      height: 22,
      padding: "0 6px",
      borderRadius: "999px",
      background: "var(--molo-heart-flat)",
      color: "#fff",
      fontSize: "12px",
      display: "grid",
      placeItems: "center"
    }
  }, cartCount) : null))));
}
function Footer() {
  const cols = [["Shop", ["Conception", "Prenatal", "Ovulation", "Hormone Balance", "Shaker bottle"]], ["Learn", ["The Molo protocol", "Nurse formulated", "Ingredients", "Reviews", "FAQ"]], ["Company", ["Our story", "Contact", "Wholesale", "Amazon", "Walmart"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--molo-navy)",
      color: "#fff",
      padding: "72px 24px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--molo-container)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3, 1fr)",
      gap: "48px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "reverseWhite",
    width: 150,
    basePath: LOGOS
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "18px",
      fontSize: "17.6px",
      lineHeight: 1.35,
      maxWidth: "30ch",
      color: "rgba(255,255,255,.85)"
    }
  }, "Empower your journey to motherhood."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginTop: "20px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email address",
    style: {
      minWidth: 220
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "sm"
  }, "Join"))), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "#fff",
      textTransform: "uppercase",
      fontSize: "16px",
      marginBottom: "14px"
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: "10px"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: "15px",
      color: "rgba(255,255,255,.8)"
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--molo-container)",
      margin: "40px auto 0",
      paddingTop: "24px",
      borderTop: "1px solid rgba(255,255,255,.18)",
      display: "grid",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(LegalNote, {
    tone: "dark"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "rgba(255,255,255,.6)"
    }
  }, "\xA9 2026 Molo. Nurse formulated in the USA.")));
}
Object.assign(window, {
  AnnouncementBar,
  Header,
  Footer,
  ASSETS,
  LOGOS,
  IMG,
  PATTERN,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/molotime/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/molotime/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Logo,
  HeartMark,
  Badge,
  EyebrowTag,
  CheckList,
  LegalNote,
  Card,
  ProductCard,
  Section
} = window.MOLODesignSystem_e2e87b;
const SKUS = [{
  key: "conception",
  name: "Conception",
  image: window.IMG + "/conception-pouch-front.png",
  benefit: "Supports egg quality and natural conception.†",
  price: "$44",
  subPrice: "30 stick packs",
  badge: "Best seller"
}, {
  key: "prenatal",
  name: "Prenatal",
  image: window.IMG + "/prenatal-pouch-front.png",
  benefit: "Folate, choline and DHA in one glass of water.†",
  price: "$44",
  subPrice: "30 stick packs"
}, {
  key: "hormone",
  name: "Hormone Balance",
  image: window.IMG + "/hormone-balance-pouch-front.png",
  benefit: "Myo and D chiro inositol for cycle support.†",
  price: "$44",
  subPrice: "30 stick packs"
}];
function Hero({
  onShop
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--molo-blue)",
      backgroundImage: `linear-gradient(rgba(49,128,226,.84), rgba(49,128,226,.84)), url(${window.PATTERN})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "84px 24px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--molo-container)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowTag, null, "Nurse formulated"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "64px",
      lineHeight: 1.02,
      color: "#fff",
      textTransform: "uppercase",
      margin: "22px 0 20px"
    }
  }, "The fertility protocol was 14 pills a day"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "22px",
      lineHeight: 1.35,
      color: "#fff",
      maxWidth: "34ch",
      margin: "0 0 28px"
    }
  }, "Molo is two stick packs in a glass of water. Thirty per bag, ninety days, that is the whole thing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    onClick: onShop
  }, "Shop the protocol"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    style: {
      background: "transparent",
      borderColor: "#fff",
      color: "#fff"
    }
  }, "How it works")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "28px"
    }
  }, /*#__PURE__*/React.createElement(LegalNote, {
    tone: "dark"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--molo-radius-block)",
      overflow: "hidden",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.IMG + "/two-pouch-flatlay-citrus-herbs.png",
    alt: "Molo Hormone Balance and Prenatal stick packs with citrus and herbs",
    style: {
      width: "100%",
      display: "block"
    }
  }))));
}
function ValueRow() {
  const items = [["30", "stick packs per bag"], ["2", "sticks a day, no pills"], ["90", "day protocol"], ["4", "live formulas"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--molo-cream)",
      padding: "34px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--molo-container)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "24px"
    }
  }, items.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--molo-font-display)",
      fontSize: "40px",
      color: "var(--molo-blue)",
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "15px",
      lineHeight: 1.3,
      color: "var(--text-body)"
    }
  }, l)))));
}
function ShopGrid({
  onOpen,
  onAdd
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "white",
    paddingY: 88
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "40px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textTransform: "uppercase"
    }
  }, "Pick your stage"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "12px",
      fontSize: "17.6px",
      color: "var(--text-body)"
    }
  }, "Four formulas. Start where your cycle is, move when it changes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "28px"
    }
  }, SKUS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.key,
    onClick: () => onOpen(s),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(ProductCard, _extends({}, s, {
    onAdd: e => {
      if (e && e.stopPropagation) e.stopPropagation();
      onAdd(s);
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "24px"
    }
  }, /*#__PURE__*/React.createElement(LegalNote, null)));
}
function HowItWorks() {
  const steps = [["Tear", "One stick pack, no measuring."], ["Mix", "A glass of water, sweet orange."], ["Drink", "Once a day, same time, ninety days."]];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "tint",
    paddingY: 88
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--molo-radius-block)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.IMG + "/shaker-orange-drink-clean.jpg",
    alt: "Molo shaker with sweet orange drink",
    style: {
      width: "100%",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowTag, null, "How to use"), /*#__PURE__*/React.createElement("h2", {
    style: {
      textTransform: "uppercase",
      margin: "18px 0 24px"
    }
  }, "No bulky pills. Just one easy stick pack a day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "18px"
    }
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: "16px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flex: "0 0 auto",
      borderRadius: "999px",
      background: "var(--molo-blue)",
      color: "#fff",
      fontFamily: "var(--molo-font-display)",
      fontSize: "20px",
      display: "grid",
      placeItems: "center"
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--molo-font-display)",
      fontSize: "20px",
      textTransform: "uppercase"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "17.6px",
      color: "var(--text-body)"
    }
  }, d))))))));
}
function Founders() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "white",
    paddingY: 88
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "36px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textTransform: "uppercase"
    }
  }, "Why we started Molo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "28px"
    }
  }, [{
    img: "/rebecca-with-toddler-outdoors.png",
    name: "Rebecca Zamolo",
    role: "Co founder",
    copy: "Three rounds of IVF and two losses. I built the thing I could not find, and I take it every day."
  }, {
    img: "/christina-westbrook-headshot.png",
    name: "Christina Westbrook, MBA MSN",
    role: "Certified fertility nurse",
    copy: "Patients were handed fourteen pills and no plan. This is the protocol I would write for them."
  }].map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.name,
    tone: "cream",
    padding: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      gap: "0",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.IMG + f.img,
    alt: f.name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 30px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--molo-font-display)",
      fontSize: "22px",
      color: "var(--molo-blue)",
      textTransform: "uppercase",
      lineHeight: 1.15
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      margin: "6px 0 14px"
    }
  }, f.role), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "17.6px",
      lineHeight: 1.35
    }
  }, f.copy)))))));
}
function ProtocolBand({
  onShop
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--molo-navy)",
      padding: "88px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--molo-container)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      textTransform: "uppercase"
    }
  }, "The Conception plus Prenatal protocol"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px",
      lineHeight: 1.35,
      color: "rgba(255,255,255,.88)",
      margin: "18px 0 26px",
      maxWidth: "38ch"
    }
  }, "Egg quality responds on a ninety day cycle. Conception in the morning, Prenatal at night, and you are covered through the transition."), /*#__PURE__*/React.createElement(CheckList, {
    tone: "dark",
    items: ["Two stick packs a day, no pill count", "Nurse formulated, third party tested", "Ships free, cancel any time"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "28px",
      display: "flex",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    onClick: onShop
  }, "Build my protocol"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--molo-radius-block)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.IMG + "/conception-hero-orangejuice.jpg",
    alt: "Conception pouch, stick pack and orange juice",
    style: {
      width: "100%",
      display: "block"
    }
  }))));
}
function HomeScreen({
  onOpen,
  onAdd,
  onShop
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onShop: onShop
  }), /*#__PURE__*/React.createElement(ValueRow, null), /*#__PURE__*/React.createElement(ShopGrid, {
    onOpen: onOpen,
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(ProtocolBand, {
    onShop: onShop
  }), /*#__PURE__*/React.createElement(Founders, null));
}
Object.assign(window, {
  HomeScreen,
  SKUS,
  Hero,
  ValueRow,
  ShopGrid,
  HowItWorks,
  Founders,
  ProtocolBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/molotime/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/molotime/ProductScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  EyebrowTag,
  CheckList,
  LegalNote,
  Card,
  Section,
  Radio,
  Checkbox
} = window.MOLODesignSystem_e2e87b;
function ProductScreen({
  sku,
  onAdd
}) {
  const s = sku || window.SKUS[0];
  const gallery = [s.image, window.IMG + "/" + (s.key === "hormone" ? "hormone-balance-hero-icedtea.jpg" : s.key === "prenatal" ? "prenatal-hero-orangejuice.jpg" : "conception-hero-orangejuice.jpg"), window.IMG + "/" + (s.key === "hormone" ? "hormone-balance-pouch-with-shaker.png" : s.key === "prenatal" ? "prenatal-pouch-with-shaker.png" : "conception-pouch-with-shaker.png"), window.IMG + "/shaker-orange-drink-clean.jpg"];
  const [shot, setShot] = React.useState(0);
  const [sub, setSub] = React.useState(true);
  const [shaker, setShaker] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "white",
    paddingY: 56
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: "56px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--molo-radius-block)",
      overflow: "hidden",
      background: "var(--surface-tint-soft)",
      display: "grid",
      placeItems: "center",
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: gallery[shot],
    alt: s.name,
    style: {
      width: "100%",
      maxWidth: 520,
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      marginTop: "16px"
    }
  }, gallery.map((g, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setShot(i),
    style: {
      width: 88,
      height: 88,
      borderRadius: "24px",
      overflow: "hidden",
      padding: 0,
      cursor: "pointer",
      background: "var(--surface-tint-soft)",
      border: `2px solid ${i === shot ? "var(--molo-blue)" : "transparent"}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, null, s.badge || "30 stick packs"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-muted)"
    }
  }, "4.8 out of 5, 1,204 reviews")), /*#__PURE__*/React.createElement("h1", {
    style: {
      textTransform: "uppercase",
      margin: "16px 0 12px"
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px",
      lineHeight: 1.35,
      margin: "0 0 22px",
      maxWidth: "40ch"
    }
  }, s.benefit), /*#__PURE__*/React.createElement(CheckList, {
    items: ["Supports egg quality†", "CoQ10 supports ovulation and conception†", "Supports ovary health†", "Gluten free, vegetarian, non GMO"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "12px",
      margin: "26px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setSub(true),
    style: {
      borderRadius: "24px",
      padding: "18px 20px",
      border: `2px solid ${sub ? "var(--molo-blue)" : "var(--border-subtle)"}`,
      background: sub ? "var(--surface-tint-soft)" : "#fff",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    label: "Subscribe and save 15%",
    checked: sub,
    onChange: () => setSub(true)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--molo-font-display)",
      fontSize: "22px",
      color: "var(--molo-blue)"
    }
  }, "$37.40")), /*#__PURE__*/React.createElement("div", {
    onClick: () => setSub(false),
    style: {
      borderRadius: "24px",
      padding: "18px 20px",
      border: `2px solid ${!sub ? "var(--molo-blue)" : "var(--border-subtle)"}`,
      background: !sub ? "var(--surface-tint-soft)" : "#fff",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    label: "One time purchase",
    checked: !sub,
    onChange: () => setSub(false)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--molo-font-display)",
      fontSize: "22px",
      color: "var(--text-body)"
    }
  }, s.price)), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Add the Molo shaker bottle, $14",
    checked: shaker,
    onChange: setShaker
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => onAdd(s, {
      sub,
      shaker
    })
  }, "Add to bag"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--text-muted)",
      marginTop: "14px"
    }
  }, "Free shipping over $50. Cancel any time."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "18px"
    }
  }, /*#__PURE__*/React.createElement(LegalNote, null))))), /*#__PURE__*/React.createElement(Section, {
    tone: "cream",
    paddingY: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "24px"
    }
  }, [["What is inside", "CoQ10 200mg, myo inositol, methylfolate, vitamin D3. Doses printed on the bag, not hidden in a proprietary blend."], ["When to take it", "One stick pack a day, morning, with or without food. Ninety days is one full egg cycle."], ["When to stop", "Move to Prenatal at a positive test. If you are in an IVF cycle, ask your clinic first."]].map(([t, c]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "white",
    padding: 30
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      textTransform: "uppercase",
      marginBottom: "10px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "17.6px",
      lineHeight: 1.35
    }
  }, c))))), /*#__PURE__*/React.createElement(Section, {
    tone: "white",
    paddingY: 72
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textTransform: "uppercase",
      marginBottom: "28px"
    }
  }, "What women say"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "24px"
    }
  }, [["I finished it", "Fourteen pills a day and I quit twice. Two sticks I actually finished the ninety days."], ["Tastes like orange juice", "My husband drinks it by accident. That is how easy it is."], ["My nurse approved it", "Brought the label to my clinic and they had no notes."]].map(([t, q]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "outline",
    padding: 30
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--molo-heart-flat)",
      fontSize: "15px",
      letterSpacing: ".1em"
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("h4", {
    style: {
      textTransform: "uppercase",
      margin: "10px 0 8px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "17.6px",
      lineHeight: 1.35
    }
  }, q))))));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/molotime/ProductScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.HeartMark = __ds_scope.HeartMark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.EyebrowTag = __ds_scope.EyebrowTag;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CheckList = __ds_scope.CheckList;

__ds_ns.LegalNote = __ds_scope.LegalNote;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Container = __ds_scope.Container;

})();
