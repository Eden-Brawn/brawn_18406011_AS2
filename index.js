
function differentpic() { /* Help with switching picture (https://stackoverflow.com/questions/29980711/javascript-hover-text-over-image)*/
    document.getElementById("me") .src = "assets/unnamed2.jpg";
    
  };
  function normalPic() {
    document.getElementById("me") .src = "assets/20200109_111813(2).jpg";
  };


function textAppear() {
    document.getElementById("text").setAttribute("style", "display:block");
};
setTimeout(textAppear, 3000); /*Help with tiemout (https://javascript.info/settimeout-setinterval)*/ 



function setTheme(background) { /*Help with light dark button (https://zocada.com/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript/)*/
    localStorage.setItem('colour', background);
    document.documentElement.className = background;
}

function change() {
    if (localStorage.getItem('colour') === 'd') {
        setTheme('l');
        
    } else {
        setTheme('d');
    }
};
(function () {
    if (localStorage.getItem('colour') === 'd') {
       setTheme('d');
    } else {
       setTheme('l');
    }
 })();



 function git(){
    let popup  = document.getElementById("gitTag").setAttribute("style", "display:block");
 };
 function noGit(){
    document.getElementById("gitTag").setAttribute("style", "display:none");
 };



 let menuDisplay = false; /*Help with hamburger (https://www.youtube.com/watch?v=urol_SD1wz4)*/ 
 function menuChange(){
     let theButton = document.getElementById("toggle");
     let theMenu = document.querySelector(".popout");
     if (menuDisplay === false) {
        theMenu.style.display = "block"; /*Help with innerHTML (https://stackoverflow.com/questions/45378428/how-to-dynamically-add-a-font-awesome-icon-with-javascript) and (https://www.quora.com/What-is-the-definition-of-innerHTML#:~:text=innerHTML%20is%20a%20DOM%20property,in%20Javascript%20to%20manipulate%20DOM.)*/
        theButton.innerHTML = '<i class="fas fa-times fa-2x"></i>';/*The source for cross icon (https://fontawesome.com/icons/times?style=solid)*/
        menuDisplay = true;
     }
     else if (menuDisplay === true)  {
        theMenu.style.display = "none";
        theButton.innerHTML = '<i id="togpic"class="fas fa-bars fa-2x"></i>';
        menuDisplay = false;
     }
 }

 


