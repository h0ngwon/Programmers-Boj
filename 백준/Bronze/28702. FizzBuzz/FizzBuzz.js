const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
	if (isNaN(Number(input[i]))) continue;
	else {
		const num = Number(input[i]);
		const target = num + 3 - i;

		if (target % 3 === 0 && target % 5 === 0) console.log("FizzBuzz");
		else if (target % 3 === 0 && target % 5 !== 0) console.log("Fizz");
    else if (target % 3 !== 0 && target % 5 === 0) console.log("Buzz");
    else {
      console.log(target)
    }
    break;
	}
}
