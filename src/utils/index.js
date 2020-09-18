export const waitFormDOMUpdate = () => {
  return new Promise(resolve => requestAnimationFrame(resolve))
}

export const preloadImage = imageUrl =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = resolve
    img.onerror = reject
    img.src = imageUrl
  })

export const preloadImages = imageUrls =>
  Promise.all(imageUrls.map(preloadImage))
