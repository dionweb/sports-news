// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const {
      data
    } = await axios.get(`
      http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${process.env.GRIDSOME_NEWS_API_KEY}`)
    const collection = actions.addCollection({
      typeName: 'Posts'
    })

    for (const item of data.articles) {
      collection.addNode({
        title: item.title,
        description: item.description,
        urlToImage: item.urlToImage,
        url: item.url
      })
    }
  })


  api.createPages(({
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}