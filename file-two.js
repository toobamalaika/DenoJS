let num = 10;
console.log(num);

// For output execute the command like deno run <filename>

/**** Runtime Api ****/
const decoder = new TextDecoder("utf-8");
const data = Deno.readFileSync("hello.txt");
console.log(decoder.decode(data));