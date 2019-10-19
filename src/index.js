fetch('https://swapi.co/api/people/1')
    .then(res => res.json())
    .then(myJson => {
        document.getElementById('div').innerHTML = 
        JSON.stringify(myJson)
    })

function darthVader() {
    fetch('https://swapi.co/api/people/4')
    .then(res => res.json())
    .then(myJson => {
        document.getElementById('div').innerHTML = 
        JSON.stringify(myJson)
    })
}