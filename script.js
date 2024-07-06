let inputText = document.getElementById("filter")
let result = document.getElementById("result")

let listItem =[]
getUsers()

inputText.addEventListener("input",(e) => {
  
    filter(e.target.value) 
})

async function getUsers(){
    const res = await fetch('https://randomuser.me/api?results=50')
    let {results} = await res.json()

    result.innerHTML = ''
    results.forEach(item => {
        let li = document.createElement("li")
        listItem.push(li)
    console.log(listItem)
        li.innerHTML = ` <img src="${item.picture.large}" alt="${item.name.first}">
                <div class="user-info">
                    <h3>${item.name.first} ${item.name.last}</h3>
                <p>${item.location.city}, ${item.location.country}</p>
                </div>`

                result.appendChild(li)
    });

}

function filter(searchItem){
listItem.forEach(users => {
    if(users.innerText.toLowerCase().includes(searchItem.toLowerCase())){
        users.classList.remove("hide")
    }
    else{
        users.classList.add("hide")
    }
});
}

