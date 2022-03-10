setInterval(function showChar(){
    let elem = document.getElementById('demo');
    let i = -1;
    let myText = "Work with no play makes Jack a dull boy";
    let x = -1;
    let elem1 = document.getElementById('pro');

    (function start(){
        if(i < myText.length){
            demo.innerHTML = demo.innerHTML + myText.charAt(i++);
            setTimeout(start, 150);
        }
    })();
    demo.innerHTML = "";

    setInterval( function showChar2(){
        (function programmer(){
            let str = "I am a programmer";
    
            if(x < str.length){
                pro.innerHTML = pro.innerHTML + str.charAt(x++);
                setTimeout(programmer, 100);
            }
        })();
        pro.innerHTML = "";
    }, 4000);
}, 8000)


