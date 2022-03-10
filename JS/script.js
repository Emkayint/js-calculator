setInterval(function showChar(){
    let elem = document.getElementById('demo');
    let i = -1;
    let myText = "Work with no play makes Jack a dull boy";

    (function start(){
        if(i < myText.length){
            demo.innerHTML = demo.innerHTML + myText.charAt(i++);
            setTimeout(start, 150);
        }
    })();
    demo.innerHTML = "";

}, 8000);

(function showChar2(){
    let x = -1;
    let str = "I am a programmer";
    let elem1 = document.getElementById('pro');

    (function programmer(){
        if(x < str.length){
            pro.innerHTML = pro.innerHTML + str.charAt(x++);
            setTimeout(programmer, 100);
        }
    })();
    pro.innerHTML = "";
})();

// showChar2();

