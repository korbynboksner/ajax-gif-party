console.log("Let's get this party started!");
async function getGifbySearch(searchterm){
        const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
            params: {
              q: searchterm,
              api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
            }

            });

addgif(response.data)
}
const form = document.querySelector('#searchform')
const input = document.querySelector('#search')
form.addEventListener("submit", function(e){
    e.preventDefault()
    getGifbySearch(input.value)
    input.value = ''
    
})

function addgif(res){
  console.log(res.data)
        const ul = document.querySelector("#gifs")
        let newgif = document.createElement("img")
        let numResults = res.data.length;
        let randomIdx = Math.floor(Math.random() * numResults);
        newgif.src = res.data[randomIdx].images.original.url
        ul.appendChild(newgif) 
}  
const btn = document.querySelector('#dbtn')
btn.addEventListener('click', done)
function done(e){
$('img').remove()
} 