const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const n = +input[0].split(" ")[0];
const pokemons = input.slice(1, n + 1);
const cmd = input.slice(n + 1);

const solution = (pokemons, cmd) => {
	const pokemonMap = new Map(
		pokemons.map((pokemon, idx) => [pokemon, idx + 1])
	);

	cmd.forEach((c) => {
		if (Number.isNaN(+c)) console.log(pokemonMap.get(c));
		else console.log(pokemons[+c - 1]);
	});
};

solution(pokemons, cmd);