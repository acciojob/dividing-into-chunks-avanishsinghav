const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
	let currentchunk = [];
	let curreentsum = 0;
	for(let num of arr){
		if(curreentsum+num > n){
			result.push(currentchunk);
			currentchunk = [];
			curreentsum = 0;
		}
		currentchunk.push(num);
		curreentsum += num;
	}
	if(currentchunk.length > 0){
		result.push(currentchunk);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
