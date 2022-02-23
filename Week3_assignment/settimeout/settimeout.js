/* Question 1
Now, write a function that takes a message and a delay and print that message after the delay.


const printmsg=(msg,delay)=>{
    setTimeout(()=>console.log(msg),delay);
}

printmsg("hello i am richa",1000);

*/

/* SETINTERVAL

Question 1

6.1 write a function which takes a message and time. The function should print that message every X interval.
6.2 Write a function that takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!" ← The important question is sometimes asked in FAANG interviews as well.




const printmsg=(msg,delay)=>{
    return setInterval(()=>console.log(msg),delay);
}
const intervalId=printmsg("hello im richa",2000);

setTimeout(()=>clearInterval(intervalId),9000);

*/

/* Question 7.1
 7.1 Create a button in React and print the event
 Can you print the button text from this event?

7.2 Create a list in React. Use array of objects. Use map to render the list
On every list there should be an onClick handler. Clicking on this should print the details of the object.

https://codesandbox.io/s/spring-wave-6ex5k0?file=/src/App.js:64-366

*/



