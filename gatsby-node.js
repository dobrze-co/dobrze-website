const path = require("path")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const missionDetailsTemplate = path.resolve(
    `src/modules/missionDetails/MissionDetails.js`
  )
  const aboutUsDetailsTemplate = path.resolve(
    `src/modules/aboutUsDetails/AboutUsDetails.js`
  )

  createPage({ path: `/mission/sale`, component: missionDetailsTemplate })
  createPage({ path: `/mission/branding`, component: missionDetailsTemplate })
  createPage({ path: `/mission/marketing`, component: missionDetailsTemplate })

  createPage({ path: `/aboutUs/ada`, component: aboutUsDetailsTemplate })
  createPage({ path: `/aboutUs/asia`, component: aboutUsDetailsTemplate })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.startsWith("/404")) {
    deletePage(page)

    createPage({
      ...page,
      context: {
        ...page.context,
        is404: true,
      },
    })
  }
}
