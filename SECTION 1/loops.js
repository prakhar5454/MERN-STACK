for (let i=0; i<=10;i++)
{
    console.log(i);
}

console.log('------------');
// console.log(i);

let n=5;

while(n<15)
{
    console.log(n);
    n++;
}

// let a=0;
// let b=1;

let [a,b]=[0,1];
console.log(a);
console.log(b);

for(let i=0;i<10;i++)
{
    let c=a+b;
    console.log(c);
    [a,b]=[b,c];
}
console.log('------------')

let num =267378;
let reverse =0;
while (num>0)
{
    let r= num%10;
    reverse = reverse*10 +r;
    num = parseInt(num/10);
}

console.log(reverse);











