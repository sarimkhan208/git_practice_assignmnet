//  find prime number

let n=7
for(i=0;i<=n;i++){
	if(n%i==0){
	count++
}
}
if(count==2){
	console.log("Yes")
}else{
	console.log("No")
}


// Check Palindrome

let str1 = "aman";
let str2 = "";
for(i=str1.length-1; i>=0; i++){
  str2=str2+str1[i];
}
if(str1==str2){
  console.log("yes")
}
else{
  console.log("no")
}