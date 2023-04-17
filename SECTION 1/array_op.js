let nums =[12,5,6,8,56,65];

let newArr=[];
for (let n of nums )
{
    if(n%2===0){
        console.log(n);
        newArr.push(n);
    }
    
};

console.log(newArr);

 let result= nums.filter( (a) => {return a%2===0});
 console.log(result);

 let price =[30,49,28,585,394,101,481];

 let res=price.filter((b)=>{return b<100});
 console.log(res);

 let mynum=25;
 console.log(mynum**0.5=== parseInt(mynum**0.5));

let result2=nums.map((n)=>{return n**2});
console.log(result2);

let prices2=['$45','$89','$12','$56','$32'];
console.log(parseInt('$89'.slice(1)));

let pr=prices2.map((n)=>{return parseInt(n.slice(1)) })
console.log(pr);

