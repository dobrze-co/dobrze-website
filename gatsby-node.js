const path = require("path")
const missionsData = require("./data/missions.json")

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const template = path.resolve(`src/modules/missionDetails/MissionDetails.js`)

  missionsData.forEach(({ name, path }) => {
    createPage({
      path: `/mission/${path}`,
      component: template,

      // Send additional data to page from JSON (or query inside template)
      context: {
        name,
      },
    })
  })
}
