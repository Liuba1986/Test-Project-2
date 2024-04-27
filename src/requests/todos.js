export const getTodos = (func) => {
    fetch("https://dummyjson.com/todos")
    .then(res => res.json())
    .then(json => func(json.todos))
}