let movies = ['Pathan' , 'RRR', 'kanatara','PK','DON','Farzi'];

console.log(movies[ 2]);
console.log(movies.at(4) );
console.log(movies.at(-3) );

console.log(movies.slice(1,4));

 movies.push('flash');  //adds elements at the end of array
movies.unshift('batman'); //adds elements at start of array

console.log(movies);
console.log(['antman',...movies, 'singham','bolt']);

//removing elements

movies.pop();
console.log(movies);

movies.shift(); //removes the first element
console.log(movies);

movies.splice( 3,2 );
console.log(movies);

movies.forEach( (m) => {console.log(m.toUpperCase())} )