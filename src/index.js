<<<<<<< HEAD
let addToy = false;

getToys();

document.addEventListener("DOMContentLoaded", () => {
  let addBtn = document.querySelector("#new-toy-btn");
  let toyFormContainer = document.querySelector(".container");
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

function getToys() {
  fetch('http://localhost:3000/toys')
  .then (resp => resp.json())
  .then (json => renderToys(json))
}

function renderToys(json) {
  for (const toy of json) {
    let toyCard = document.createElement('div')
    toyCard.className = "card";

    let h2 = document.createElement('h2')
    h2.innerHTML = toy.name
    toyCard.appendChild(h2)

    let img = document.createElement('img')
    img.src = toy.image
    img.className = "toy-avatar"
    toyCard.appendChild(img)

    let p = document.createElement('p')
    p.innerHTML = toy.likes
    toyCard.appendChild(p)

    let button = document.createElement('button')
    button.className = "like-btn"
    button.innerHTML = "Like <3"
    toyCard.appendChild(button)

    document.querySelector('#toy-collection').appendChild(toyCard)

    button.addEventListener('click', function(e) {
      toy.likes++
      p.innerText = `${toy.likes}`
      like(toy.id, toy.likes)
    })
  }
}

document.addEventListener('submit', function(e) {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const image = document.querySelector('input[name="image"]').value;
  
    let formData = {
      "name": name,
      "image": image,
      "likes": 0
    };
  
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(formData)
    };
  
    
    fetch('http://localhost:3000/toys', configObj)
      .then(resp => resp.json())
      .then(json => renderPostFetch(json));

      function renderPostFetch(json) {
        let toyCard = document.createElement('div')
        toyCard.className = "card";
      
        let h2 = document.createElement('h2')
        h2.innerHTML = json.name
        toyCard.appendChild(h2)
      
        let img = document.createElement('img')
        img.src = json.image
        img.className = "toy-avatar"
        toyCard.appendChild(img)
      
        let p = document.createElement('p')
        p.innerHTML = json.likes
        toyCard.appendChild(p)
      
        let button = document.createElement('button')
        button.className = "like-btn"
        button.innerHTML = "Like <3"
        toyCard.appendChild(button)

        button.addEventListener('click', function(e) {
          toy.likes++
          p.innerText = `${toy.likes}`
          like(toy.id, toy.likes)
        })
      }
});


function like(id, likes) {    

    fetch(`http://localhost:3000/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        "likes": likes
      })
  });
}
=======
let addToy = false

document.addEventListener("DOMContentLoaded", ()=>{
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  getToys()
  addBtn.addEventListener('click', (event) => {
    // hide & seek with the form
    event.preventDefault()
    console.log(event)
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
      toyForm.addEventListener('submit', event => {
        event.preventDefault()
        const toyArgument = {
          method: 'POST',
          headers:
          {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            "name": `${event.target.name.value}`,
            "image": `${event.target.image.value}`,
            "likes": 0
      })
    }

    fetch('http://localhost:3000/toys', toyArgument)
      .then((response) => {
        return response.json()
      }) .then(function(object) {
        return object;
      })
    })} else {
      toyForm.style.display = 'none'
    }
  })
})

function addLikes(event) {
  const putToyLikes = parseInt(event.target.parentElement.querySelector("p").innerHTML[0])
  const toyLikeArgument = {
    method: 'PATCH',
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },

    body: JSON.stringify({
      "likes": `${putToyLikes + 1}`
    })
  }
  fetch(`http://localhost:3000/toys/${event.target.id}`, toyLikeArgument)
  .then((response) => {
    return response.json()
  }) .then(likesObject => {
    putToyLikes.innerText = `${putToyLikes + 1} likes`
  })

}

function getToys() {
  return fetch('http://localhost:3000/toys')
  .then(response => response.json())
  .then(function(toyArgument){
      toyArgument.forEach(toy => {
        renderToys(toy)
      })
  })
}

function renderToys(toy) {
  const toyCollection = document.getElementById("toy-collection")
  const toyCard = `<div class="card">
  <h2>${toy.name}</h2>
  <img src="${toy.image}" class="toy-avatar" />
  <p>${toy.likes} likes </p>
  <button id="${toy.id}" class="like-btn" onclick="addLikes(event)">Like <3 </button>
  </div>`
  toyCollection.innerHTML += toyCard
}
>>>>>>> 956108be56d0324cb629569ce257ccfb5d5ddd95
