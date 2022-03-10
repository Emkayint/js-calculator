setInterval(function showChar(){
    let elem = document.getElementById('demo');
    let i = 0;
    let myText = "Work with no play makes Jack a dull boy";

    (function start(){
        if(i < myText.length){
            demo.innerHTML = demo.innerHTML + myText.charAt(i++);
            setTimeout(start, 50);
        }
    })
})


