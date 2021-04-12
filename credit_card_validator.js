function esPar(n) {
return n%2==0;
}

function verify(n) {
let arr = [];
let nn = [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]
for (let i = 0; i<n.length;i++) {
	arr.push(Number(n[i])*nn[i]);
}
arr = arr.map(el => {
if (el.toString().length > 1) {
return Number(el.toString()[0])+Number(el.toString()[1]);
} else {
return el;
}
})
let res = arr.reduce((a,b) => a+b);
if (res.toString()[res.toString().length-1] == "0") {
return "valid";
} else {
return "invalid";
}
}

console.log(verify("3379513561108795"));
