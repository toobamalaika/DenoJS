let othernum: number = 10;
console.log(othernum);

// For output execute the command like deno run <filename>

/**** Runtime Api ****/
const decoder1 = new TextDecoder("utf-8");
const data1 = Deno.readFileSync("hello.txt");
console.log(decoder1.decode(data1));


/**** Call JSON Api Using asynchronous ****/
const data2 = await fetch('https://jsonplaceholder.typicode.com/users');
console.log(await data2.json());