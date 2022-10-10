export function pow(x:number,n:number){

  let a=x;
for(let i=1;i<n;i++){
   
   a= a*x
   
}
console.log(a);
return(a);
}




//*Description
//Implement a pow function: x^n, where x = base, n = exponent. NOTE: Don't use Math.pow(), should implement using for, while..


//Mockup
//..

//Unit Test

 //Should return 1 if n = 0
 //Should return 0 if n is negative
 //Should return 8 if x=2, n=3
 //Should return 9 if x=3, n=2 
 