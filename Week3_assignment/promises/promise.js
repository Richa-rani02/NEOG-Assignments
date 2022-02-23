/*
create your own version of promise


use the fakeFetch() to get data and show on success.

*/

function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${msg}`)
        }
        resolve(`from server: ${msg}`)
      }, 3000)
    })
  }

  const printsuccessorfail=(msg)=>fakeFetch(msg,true).then(data=>console.log(data)).catch(err=>console.error(err))
  printsuccessorfail("hello from richa");

// const print=(msg)=>fakeFetch(msg).then(data=>console.log(data))
//console.log(fakeFetch("hello").then(data=>console.log(data)))
// console.log(print("hello from richa"));

/*
Call fakeFetch(msg, true) to get a rejected promise. Handle the error with the error handler. Show a message using console.error for errors.


const printsuccessorfail=(msg)=>fakeFetch(msg,true).then(data=>console.log(data)).catch(err=>console.error(err))
printsuccessorfail("hello from richa");

*/

/* promise chaining

Create a function getServerResponseLength(msg) This function will use fakeFetch() internally with the message and return the length of the response received by the server.


const getServerResponseLength=(msg)=>fakeFetch(msg).then(data=>console.log(data.length));
getServerResponseLength("Hello there");
*/


/*
Write a function syncCallsToServer(msg1, msg2) which will take two messages and call fakeFetch() with the second message only when the first message has returned from the server.


const syncCallsToServer=(msg1,msg2)=>fakeFetch(msg1).then(datafrommsg1=>fakeFetch(msg2).then(datafrommsg2=>console.log({datafrommsg1,datafrommsg2})));
syncCallsToServer("richa","shubham");

*/
