let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function getToys(){
  fetch(" http://localhost:3000/toys")
  .then(res => res.json())
  .then(data => renderToy(data))
}
function renderToy(toys){
    const toyCollection = document.querySelector("#toy-collection")
  toys.forEach((toy)=> {
    const card = document.createElement("div")
    card.classList.add("card")
    const h2 = document.createElement("h2");
    h2.textContent = toy.name

    const image = document.createElement("img");
    image.classList.add("toy-avatar")
    image.src = toy.image

    const p = document.createElement("p");
    p.textContent = `likes ${toy.likes}`

    const button = document.createElement("button")
    button.textContent = "<3 Like"

    card.append(h2, image, p, button)
    console.log(card)
    toyCollection.append(card) 
  })
}
getToys()

function postToys(){
    const form = document.querySelector(".add-toy-form")
    form.addEventListener("submit", (e) => {
      e.preventDefault()
    const nameInput = e.target["name"].value
    const imageSource = e.target["image"].value
    const newToyObject = {
      name: nameInput,
      image: imageSource,
      likes: 0
    }
    renderToy([newToyObject])
    })
}
postToys()

