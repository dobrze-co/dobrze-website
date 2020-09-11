const path = require("path")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const missionDetailsTemplate = path.resolve(
    `src/modules/missionDetails/MissionDetails.js`
  )
  const aboutUsDetailsTemplate = path.resolve(
    `src/modules/aboutUsDetails/AboutUsDetails.js`
  )

  createPage({ path: `/mission/pr`, component: missionDetailsTemplate })
  createPage({ path: `/mission/branding`, component: missionDetailsTemplate })
  createPage({ path: `/mission/marketing`, component: missionDetailsTemplate })

  createPage({ path: `/aboutUs/ada`, component: aboutUsDetailsTemplate })
  createPage({ path: `/aboutUs/asia`, component: aboutUsDetailsTemplate })
}
