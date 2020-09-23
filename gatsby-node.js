const path = require("path")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const missionDetailsTemplate = path.resolve(
    `src/modules/missionDetails/MissionDetails.js`
  )
  const aboutUsDetailsTemplate = path.resolve(
    `src/modules/aboutUsDetails/AboutUsDetails.js`
  )

  createPage({ path: `/co-robimy/sprzedaz`, component: missionDetailsTemplate })
  createPage({ path: `/co-robimy/branding`, component: missionDetailsTemplate })
  createPage({
    path: `/co-robimy/marketing`,
    component: missionDetailsTemplate,
  })

  createPage({ path: `/o-nas/ada`, component: aboutUsDetailsTemplate })
  createPage({ path: `/o-nas/asia`, component: aboutUsDetailsTemplate })
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
