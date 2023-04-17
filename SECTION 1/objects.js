let userdetails ={ email: 'user@gmail.com', password:'1212121', name:'ramu'};

console.log(userdetails.email);

console.log(userdetails['password']);

let somekey = 'name';

console.log(userdetails[somekey]);

userdetails.address ='lucknow';

console.log(userdetails);

userdetails.address='gomtinagar';

console.log(userdetails);

const smartphone ={
    brand: 'apple',
    model:'iphone 14 pro max',
    price: '1500000',
    color:'white',

};

console.log(smartphone);

smartphone.color='red';

console.log(smartphone);

smartphone.color=['white','red','green'];
console.log(smartphone);

console.log(smartphone.color[0]);



