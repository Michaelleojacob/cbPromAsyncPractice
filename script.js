console.log('hello');

//fetch returns a promise.
//by doing fetch we are in a way replacing the need to do
//const myVar = new Promise;

function exampleOfPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
}
exampleOfPosts();

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((promiseReponse) => promiseReponse.json())
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

function forceError() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (promiseReponse) {
      return promiseReponse.json();
    })
    .then(function (result) {
      throw new Error('Whoops!');
      return console.log(result);
    })
    .catch(function (err) {
      console.log(err);
    });
}

getPosts();
forceError();

async function myasync() {
  const promiseResponse = await fetch(
    'https://jsonplaceholder.typicode.com/posts/1',
  );
  const data = await promiseResponse.json();
  console.log(data);
}

myasync();
