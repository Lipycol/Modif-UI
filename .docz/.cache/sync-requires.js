

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-components-button-button-mdx": (preferDefault(require("F:\\Git\\Modif-UI\\src\\components\\button\\button.mdx"))),
  "component---src-components-home-mdx": (preferDefault(require("F:\\Git\\Modif-UI\\src\\components\\home.mdx"))),
  "component---src-pages-404-js": (preferDefault(require("F:\\Git\\Modif-UI\\.docz\\src\\pages\\404.js")))
}

