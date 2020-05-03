
function differentpic() { /* Help with switching picture (https://stackoverflow.com/questions/29980711/javascript-hover-text-over-image)*/
    document.getElementById("me") .src = "assets/unnamed2.jpg";
    document.getElementById("text").setAttribute("style", "display:block");
  };
  function normalPic() {
    document.getElementById("me") .src = "assets/20200109_111813(2).jpg";
  };

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


 
 



