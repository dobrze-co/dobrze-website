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
