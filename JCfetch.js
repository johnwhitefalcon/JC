var res = await fetch('https://swapi.dev/api/films/');
var data = await res.json();

console.log(data);
