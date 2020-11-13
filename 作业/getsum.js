function getSum(n){
	if(n==1){
		return 1;
	}
	return n+getSum(n-1);
}
var res = getSum(100);
console.log('res',res);