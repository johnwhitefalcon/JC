// finally got fetch to work
await fetch('https://jsonplaceholder.typicode.com/posts').then
((response) =>{
    return response.json();
}).then
((data) =>{
    //const print = data.map (user =>{
        //return `<p>${user}</p>}`
        //console.log(print);
    //})
    console.log(data);
})

