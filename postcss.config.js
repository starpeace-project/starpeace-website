module.exports = {
  plugins: [
    require('postcss-cssnext')({
      browserslist: ["> 1%", "last 2 versions"],
      features: {
        customProperties: false
      }
    }),
    require('postcss-import')()
  ]
}
