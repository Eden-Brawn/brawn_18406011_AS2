/*Some inspiration from (https://codepen.io/amaury-diallo/pen/rbKEoB) */
function differentpic() { /* Help with switching picture (https://stackoverflow.com/questions/29980711/javascript-hover-text-over-image)*/
   document.getElementById("me") .src = "assets/unnamed2.jpg";
   
 }/*Help from (/*Based on (https://github.com/lizcoultersmith/starter-landing/blob/master/scripts.js) */
 function normalPic() {
   document.getElementById("me") .src = "assets/20200109_111813(2).jpg";
 }


function textAppear() {
   document.getElementById("text").setAttribute("style", "display:block");
}
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
}
(function () {
   if (localStorage.getItem('colour') === 'd') {
      setTheme('d');
   } else {
      setTheme('l');
   }
})();



function git(){ /*Help with setAttribute (https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) */
   let popup  = document.getElementById("gitTag").setAttribute("style", "display:block");
}
function noGit(){
   document.getElementById("gitTag").setAttribute("style", "display:none");
}

function face(){
   let popup  = document.getElementById("faceTag").setAttribute("style", "display:block");
}
function noFace(){
   document.getElementById("faceTag").setAttribute("style", "display:none");
}

function link(){
   let popup  = document.getElementById("linkTag").setAttribute("style", "display:block");
}
function noLink(){
   document.getElementById("linkTag").setAttribute("style", "display:none");
}
function stack(){
   let popup  = document.getElementById("stackTag").setAttribute("style", "display:block");
}
function noStack(){
   document.getElementById("stackTag").setAttribute("style", "display:none");
}

let menuDisplay = false; /*Help with hamburger (https://www.youtube.com/watch?v=urol_SD1wz4)*/ 
function menuChange(){
    let theButton = document.getElementById("toggle");
    let theMenu = document.querySelector(".popout");

    if (menuDisplay === false) { /*Help with if statements (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)*/
       theMenu.style.display = "block"; /*Help with innerHTML (https://stackoverflow.com/questions/45378428/how-to-dynamically-add-a-font-awesome-icon-with-javascript) and (https://www.quora.com/What-is-the-definition-of-innerHTML#:~:text=innerHTML%20is%20a%20DOM%20property,in%20Javascript%20to%20manipulate%20DOM.)*/
       theButton.innerHTML = '<i class="fas fa-times fa-2x"></i>';/*The source for cross icon (https://fontawesome.com/icons/times?style=solid)*/
       menuDisplay = true;
       
    }
    else if (menuDisplay === true)  {
       theMenu.style.display = "none";
       theButton.innerHTML = '<i id="togpic"class="fas fa-bars fa-2x"></i>'; /*The source for hamburger icon (https://fontawesome.com/icons/bars?style=solid) */
       menuDisplay = false;
       
    }
}

/*I used this to help me make the hamburger leave when scrolling (https://webdesign.tutsplus.com/tutorials/how-to-hide-reveal-a-sticky-header-on-scroll-with-javascript--cms-33756)*/ 
/*Also this (https://stackoverflow.com/questions/57235230/want-to-hide-show-navbar-when-scroll-down-up-using-js-or-jquery) */
     const ham = document.querySelector(".ham");
    const cb = "comeback";
    const l = "leave";
    
     window.addEventListener('scroll', () => {
    if (menuDisplay === true && window.scrollY > 50){
        ham.classList.add(l);
        ham.classList.remove(cb); /*Help with classList, add, remove (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#:~:text=classList%20is%20a%20read%2Donly,space%2Ddelimited%20string%20via%20element.) */
    }
    else{
       ham.classList.add(cb);
       ham.classList.remove(l);
    }
  });


/*How to monitor button presses(https://stackoverflow.com/questions/2788191/how-to-check-whether-a-button-is-clicked-by-using-javascript) */
  document.getElementById('input').onclick = function() {
     
     if (confirm('Do you want to open your email account?')){
           window.open('mailto:edenbrawn@gmail.com?subject=About your website.....&body=Dear Eden Brawn');

     }
     else{/*Help with confirm (https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-yes-and-no-options) */

     }
     
};/*How to use mailto (https://stackoverflow.com/questions/7381150/how-to-send-an-email-from-javascript) */


