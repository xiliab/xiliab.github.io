let myImage = document.querySelector ('img') ;

myImage.onclick = function () {
    let mySrc = myImage.getAttribute ('src') ;
    if (mySrc ==='images/pexels1.jpeg') {
        myImage.setAttribute ('src', 'images/pexels2.jpeg') ;
    } else {
        myImage.setAttribute ('src', 'images/pexels1.jpeg') ;
    }
}

let myButton = document.querySelector ('button') ;
let myHeading = document.querySelector ('h1') ;

function setUserName () {
    let myName = prompt ('请输入你的名字。') ;
    localStorage.setItem ('name', myName) ;
    myHeading.textContent = '设计资讯导航很酷，'+ myName;
}

if (! localStorage.getItem ('name')) {
    setUserName () ;
} else {
    let storedName = localStorage.getItem ('name') ;
    myHeading.textContent = '设计资讯导航很酷，'+ storedName;
}

myButton.onclick = function() {
    setUserName();
}