//ES2015 Shorthand

const double = arr => arr.map(val => val * 2);

//"Replace all functions with arrow functions"

function squareAndFindEvens(numbers){
	let sq = numbers.map(function(num){
		return num ** 2;
	});
	let ev = sq.filter(function(squa){
		return sq % 2 === 0;
	}); 
	return ev;
}

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(sq => sq % 2 === 0);