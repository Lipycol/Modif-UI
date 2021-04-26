const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Modif-UI',
    description: 'A Design UI library for React',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'F:\\Git\\Modif-UI\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: './src/**/*.{md,markdown,mdx}',
        public: '/public',
        dest: 'docz',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Modif-UI',
        description: 'A Design UI library for React',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'F:\\Git\\Modif-UI',
          templates:
            'F:\\Git\\Modif-UI\\node_modules\\docz-core\\dist\\templates',
          docz: 'F:\\Git\\Modif-UI\\.docz',
          cache: 'F:\\Git\\Modif-UI\\.docz\\.cache',
          app: 'F:\\Git\\Modif-UI\\.docz\\app',
          appPackageJson: 'F:\\Git\\Modif-UI\\package.json',
          appTsConfig: 'F:\\Git\\Modif-UI\\tsconfig.json',
          gatsbyConfig: 'F:\\Git\\Modif-UI\\gatsby-config.js',
          gatsbyBrowser: 'F:\\Git\\Modif-UI\\gatsby-browser.js',
          gatsbyNode: 'F:\\Git\\Modif-UI\\gatsby-node.js',
          gatsbySSR: 'F:\\Git\\Modif-UI\\gatsby-ssr.js',
          importsJs: 'F:\\Git\\Modif-UI\\.docz\\app\\imports.js',
          rootJs: 'F:\\Git\\Modif-UI\\.docz\\app\\root.jsx',
          indexJs: 'F:\\Git\\Modif-UI\\.docz\\app\\index.jsx',
          indexHtml: 'F:\\Git\\Modif-UI\\.docz\\app\\index.html',
          db: 'F:\\Git\\Modif-UI\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
