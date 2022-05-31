const cnjokes = document.getElementById("cnjokes")
const a = document.createElement("a")
console.log(cnjokes)
console.log(a)

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-RapidAPI-Host': "[insert rapidapi host]",
    		'X-RapidAPI-Key': "[insert rapidapi key]"
    }
};
function quote() {
    //search?query=earth
    fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
    //.then(response => {console.log(response)})
    .then(response => {
        return response.json()
      })
    .then(data => {
        //console.log(data.value)
        a.innerHTML = data.value;
        cnjokes.appendChild(a);
    })
	//.catch(err => console.error(err));
}





// <script defer>'fetch.js' </script>

//<p>[WP-Coder id="2"]</p>
