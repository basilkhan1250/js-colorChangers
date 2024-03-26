
let title = document.querySelector(".title")
let button = document.querySelector(".button")

function colorChanger() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}

button.addEventListener("click", () => {
    let changeColor = colorChanger()
    document.body.style.backgroundColor = changeColor
    title.textContent = changeColor
})

