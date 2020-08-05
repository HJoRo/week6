const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question(`What is your name?`, (name) => {
	console.log(`${name} is such a great name!`)
	readline.close()
})
readline.question(`What is your favorite movie?`, (movie) => {
        console.log(`I saw ${movie} recently, it's a great film.`)
	readline.close()
});

