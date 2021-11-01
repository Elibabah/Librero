// traer la data del JSON con un fetch
fetch("./assets/data/libros.json")
    .then((response) => response.json())
    .then((data) => iterarLibros(data))
    .catch((error) => console.log(error))

//estante de libros
let librero = document.getElementById("estante")

// iterar json de libros
let iterarLibros = (data) => {
    console.log(data.my_Favorite_Books)
    for (const libro of data.my_Favorite_Books) {
        console.log(libro.título)
        librero.innerHTML +=
            `
            <div class="book-container">
            <div class="book-portrait">
            <div class="book-cover" id='${libro.título}'></div> 
            <div class="book-back">
            <h5>${libro.título}</h5>
            <p class="autor">${libro.autor}</p>
            <p class="rating"><b>rating:</p>
            <p class="rating" id='${libro.título}_rating'</p>
            </div>
            </div>
        </div>
    `
        let portadaLibro = document.getElementById(`${libro.título}`)
        portadaLibro.style.backgroundImage = "url(" + ` ${libro.portada}` + ")"
        portadaLibro.style.backgroundSize = "cover"

        //traerse el id dinámicamente
        let ratingParagraph = document.getElementById(`${libro.título}_rating`)

        // get rating func
        getRating(libro.rating, ratingParagraph)
    }
}


//traer rating por libro de manera dinámica
let getRating = (rating, id) => {
    console.log(rating, id)
    for (let i = 0; i < rating; i++) {
        id.innerHTML += '<i class="bi bi-star-fill"></i>' // ícono de bootstrap para estrella
    }
}


//1. Arreglo libros favoritos

let myFavoriteBooks = [""]



// método pop para eliminar último elemento
myFavoriteBooks.pop();
console.log(myFavoriteBooks)

// método push() para agregar un elemento al final
myFavoriteBooks.push("")
console.log(myFavoriteBooks)

//Pintar dinámicamente mi array

//let librero = document.getElementById("estante");
/*for (const libro of myFavoriteBooks) {
    librero.innerHTML +=
        ` 
            <div class="book-container">
            <div class="book-portrait">

                <div class="book-cover">${libro}</div>
                <div class="book-back">back</div>
            </div>
        </div>
    `
}*/


// traer libro por agregar

let botonAgregar = document.getElementById("button-addon2")

//función para leer el valor del input

let traerValorInputtt = () => {
    let nuevoLibro = document.getElementById("inputLibro").value
    console.log(nuevoLibro)
    myFavoriteBooks.push(nuevoLibro)
    console.log(myFavoriteBooks)
    librero.innerHTML += ` <div class="book-container">
            <div class="book-portrait">
                <div class="book-cover">${nuevoLibro}</div>
                <div class="book-back">back</div>
            </div>
        </div>`
}

botonAgregar.addEventListener("click", traerValorInputtt)

//Botón de borrar último libro
let botonBorrarUltimo = document.getElementById("borrarUltimo")
    // función de borrar último libro
const borrarLibro = () => {
    myFavoriteBooks.pop()
    console.log(myFavoriteBooks)
    librero.innerHTML = "";
    for (const libro of myFavoriteBooks) {
        librero.innerHTML += "<div class='book'>" + libro + "</div>"
    }
}

//darle la función al botón de borrar
botonBorrarUltimo.addEventListener("click", borrarLibro)

//ordenar libros alfabéticamente

// función para ordenar con método sirt() al click
let ordenarLibros = () => {
    myFavoriteBooks.sort()
    librero.innerHTML = "";
    for (const libroOrdenado of myFavoriteBooks) {
        librero.innerHTML +=
            ` 
        <div class="book-container">
            <div class="book-portrait">
                <div class="book-cover">${libroOrdenado}</div>
                <div class="book-back">back</div>
            </div>
        </div>
        `
    }
}

// Agregar función a botón ordenar
let botonOrdenar = document.getElementById("btn-ordenar")
botonOrdenar.addEventListener("click", ordenarLibros)