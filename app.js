// //window object model
// // alert("Hello world");
//  console.log(this);

// // const x = prompt("Give your number");
// // console.log(x);

// const changeColor = () =>{
//     const myDiv = document.getElementById('div');
//     myDiv.style.backgroundColor = 'green';
// }


// //1. Id-e gore secme
// const myDiv = document.getElementById('div');
// console.log(myDiv);

// //2.Tage-gore secme
// const myDivs = document.getElementsByTagName('div');
// // Array.from(myDivs).forEach

// //3.classlara gore secme
// const myClassedDivs = document.getElementsByClassName('1');
// console.log(myClassedDivs);

// //4. css selectoruna gore secme
// //4.1 querySelector
// //4.2 querySelectorAll

// const myElem = document.querySelectorAll('.p1 span');
// console.log(myElem);

// const addClass = () =>{
   
//     const myDiv = document.getElementById('div');

//     const mySpan = document.createElement('span');
//     mySpan.innerHTML = 'This is my span';
//     mySpan.classList.add('span');

    

//     myDiv.appendChild(mySpan);


// }


const myButton = document.querySelector('button');
// myButton.addEventListener('dblclick',function(event){
//     // alert('This button is clicked');
//     console.log(event.target);
// })

const myInp = document.getElementById('txt');
myInp.addEventListener('keyup',(e) =>{
    console.log(e.target.value);
})




