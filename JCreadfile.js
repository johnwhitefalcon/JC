var decoder = new TextDecoder('utf-8');

var data = await Deno.readFile('C:/JCtest/JCfiletest.txt');

console.log(decoder.decode(data));

var encoder = new TextEncoder();

var text = encoder.encode('winner writing this to the word doco');

await Deno.writeFile('C:/JCtest/JCfiletest.txt', text);


