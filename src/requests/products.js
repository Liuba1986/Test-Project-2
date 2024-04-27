export const getAllProducts = (func) => {
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(json => func(json.products))
}
