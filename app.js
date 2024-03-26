
let title = document.querySelector(".title")
let button = document.querySelector(".button")

function colorChanger() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    return `rgb (${red}, ${green}, ${blue})`
}

button.addEventListener("click", () => {
    let changeColor = colorChanger()
    document.body.style.backgroundColor = changeColor
    title.textContent = changeColor
})



// let title = document.querySelector('#title')
// let btn = document.querySelector('button')
// let div = document.querySelector('div')

// function colorGenerator(){
//     let red = Math.floor(Math.random()*256)
//     let green = Math.floor(Math.random()*256)
//     let blue = Math.floor(Math.random()*256)
//     return   `rgb (${red}, ${green}, ${blue})`;
// }

// btn.addEventListener('click', () => {
//     let colorChange = colorGenerator()
//     document.body.style.backgroundColor = colorChange
//     title.textContent = colorChange 
//     btn.style.backgroundColor = colorChange
//     div.style.backdropFilter =colorChange

// })