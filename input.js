const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

const question1 = () => {
	return new Promise((resolve, reject) => {
	readline.question(`What is your name?`, (name) => {
	console.log(`${name} is such a great name!`)
	resolve()
})
})
}
const question2 = () => {
	return new Promise((resolve, reject) => {
	readline.question(`What is your favorite movie?`, (movie) => {
        console.log(`I saw ${movie} recently, it's a great film.`)
	resolve()
})
})
}
const main = async () => {
	await question1()
	await question2()
	readline.close()
}
main()

