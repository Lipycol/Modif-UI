// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-components-button-button-mdx": () => import("./../../../../src/components/button/button.mdx" /* webpackChunkName: "component---src-components-button-button-mdx" */),
  "component---src-components-home-mdx": () => import("./../../../../src/components/home.mdx" /* webpackChunkName: "component---src-components-home-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

