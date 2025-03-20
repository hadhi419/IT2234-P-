//printing elements of a number array
let numarray = [1,2,3,9,5]
console.log("using for loop")
for(var i=0; i<numarray.length; i++)
{
	console.log(numarray[i])
}

console.log(" ")

console.log("using forEach loop")
numarray.forEach ((n) =>
{
	console.log(n)
})
console.log(" ")
console.log()

//Printing in reverse
let arr = ['a','b','c','d']
arr.push('e')
console.log(arr)
console.log(" ")

//reverse the array using push pop
while(arr.length > 0)
{
	console.log(arr.pop())
}

console.log(" ") 