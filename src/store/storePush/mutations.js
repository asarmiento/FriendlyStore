export function addProductMutation (state, playload) {
  state.productsCard = playload.product
  state.totales = playload.totales
}
export function productMuttation (state, playload) {
  state.product = playload
}
