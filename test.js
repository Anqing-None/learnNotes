function display(result) {
	console.log(result);
}

function cal(x,y,callback) {
	var sum = x + y;
	callback(sum);
}
function pro1(success,fail) {
	// setTimeout(function(){success('i love you 111111!');},3000);
	fail('i love you 111111!');
}
let myPromise = new Promise(pro1);

myPromise.then(function(fuck){
	console.log(fuck+' damn it.');
}).catch(function(fuckyou){
	console.log('fuck you.')
});


console.log('i am doing somethings else.2222222');


// function teset(){

// }




// function test(resolve,reject) {
// 	let mytimeout = Math.random() * 2;
// 	console.log('set timeout to ' + mytimeout + 'seconds.');
// 	setTimeout(function () {
// 		if (mytimeout<1) {
// 			console.log("执行成功，调用resolve函数中...");
// 			resolve("success done!")
// 		}else {
// 			console.log('set timeout to ' + mytimeout + 'seconds.');
// 			console.log("执行失败，调用reject函数中...")
// 			reject("failed...");
// 		}
// 	},mytimeout*1000);
// }

// let p1 = new Promise(test);
