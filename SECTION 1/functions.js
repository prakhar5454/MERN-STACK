function addNums (a,b)
{
    let c= a+b;
    console.log(c);
}
    
// calling the functions 
addNums(45,56);

const checkEven = function(n){
    if(n%2===0)
    {
        console.log('even');
    }
    else{
        console.log('odd');
    }
}

checkEven(59);

// arrow function 

const checkPrime =(n) => {
  let prime =true;
  
  for (let i=2; i<n;i++)
  {
    if(n%i===0)
    {
        console.log('not prime');
        prime= false ;
        break;
    }
  }

  if(prime) console.log('prime');
}

checkPrime(65);