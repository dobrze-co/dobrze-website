export const waitFormDOMUpdate = () => {
  return new Promise(resolve => requestAnimationFrame(resolve))
}
