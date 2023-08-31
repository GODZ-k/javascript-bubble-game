# javascript-bubble-game [click here ](https://magenta-youtiao-240d7c.netlify.app/)
We created javascript bubble game in just 3 files 
## Working demo
- If video is not showing [Click here](https://clipchamp.com/watch/C9spua6Dd8b)
  
https://github.com/GODZ-k/javascript-bubble-game/assets/131422684/9a765f02-cb40-4516-832a-a97d09d88a78
### STEP 1: Cteate these files
- index.html
- index.css
- index.js
- link css and js file in index.html

#### index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/index.css">
</head>
<body>
    <div id="main">
        <div id="pannel">
            <div id="ptop">
                <div class="box">
                    <h2>Hit</h2>
                    <div class="box1"></div>
                </div>
                <div class="box">
                    <h2>Timer</h2>
                    <div class="box1">60</div>
                </div>
                <div class="box">
                    <h2>Score</h2>
                    <div class="box1">0</div>
                </div>
                <button onclick="play()">Play</button>

            </div>
            <div id="pbottom">
            </div>
        </div>
    </div>
    <script src="/index.js"></script>
</body>
</html>
```
#### index.css
```
* {
    margin: 0;
    padding: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    box-sizing: border-box;
}
body,
html {
    height: 100%;
    width: 100%;
}
#main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgb(155, 184, 155);
}
#pannel {
    overflow: hidden;
    width: 80%;
    background-color: white;
    border-radius: 10px;
    height: 80%;
}
#ptop {
    width: 100%;
    background-color: rgb(59, 155, 59);
    height: 100px;
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    align-items: center;
}
.box {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    padding: 10px;
}
.box h2 {
    font-size: 25px;
}
.box1 {
    background-color: white;
    color: black;
    border-radius: 5px;
    font-weight: 600;
    padding: 10px 20px;
}
#pbottom {
    /* background-color: black; */
    width: 100%;
    padding: 20px;
    /* height: 100%; */
    display: flex;
    /* overflow: scroll; */
    gap: 10px;
    justify-content: center;
    align-items: center;
    /* or  */
    flex-wrap: wrap;
    height: calc(100% - 100px);
}
.bubble {
    background-color: rgb(53, 138, 53);
    width: 40.2px;
    display: flex;
    justify-content: center;
    /* margin-bottom: 2px; */
    align-items: center;
    font-weight: 600;
    /* overflow: hidden; */
    color: white;
    height: 40.2px;
    border-radius: 50%;
    font-size: 20px;
}
.bubble:hover {
    background-color: rgb(8, 88, 8);
    cursor: pointer;
}
button {
    color: black;
    border: none;
    padding: 10px 25px;
    border-radius: 10px;
    font-size: 15px;
    /* font-weight: 600; */
    cursor: pointer;
    transition: 0.2s;
}
button:hover {
    background-color: rgb(155, 184, 155);
}
@media (max-width:742px) {
    .box h2 {
        font-size: 20px;
    }
    .box1 {
        font-size: 15px;
        padding: 6px 17px;
    }
}
@media (max-width:672px) {
    #ptop {
        gap: 6px;
    }
    button {
        padding: 8px 20px;
    }
}

@media (max-width:588px) {
    #ptop {
        gap: 0;
    }
    .box1 {
        font-size: 15px;
        padding: 5px 12px;
    }
    .box h2 {
        font-size: 18px;
    }
    button {
        padding: 6px 17px;
    }
}
@media (max-width:507px) {
    .box {
        gap: 5px;
    }
    .box1 {
        font-size: 12px;
        padding: 4px 10px;
    }
}
@media (max-width:507px) {
    .box h2 {
        font-size: 15px;
    }
    button {
        padding: 5px 15px;
    }
}
@media (max-width:434px) {
    .box {
        display: flex;
        align-items: stretch;
        flex-direction: column;
        gap: 7px;
        padding: 15px;
    }
    .box h2 {
        font-size: 17px;
    }
    .box1 {
        font-size: 15px;
        padding: 5px 13px;
    }
    button {
        margin-left: 5px;
    }
}
@media (max-width:380px) {
    .box {
        padding: 10px;
    }
    .box h2 {
        font-size: 15px;
    }
    .box1 {
        font-size: 14px;
        padding: 5px 10px;
    }
    button {
        padding: 4px 10px;
    }
}
@media (max-width:304px) {
    .box {
        padding: 8px;
    }
    .box h2 {
        font-size: 13px;
    }
    .box1 {
        font-size: 13px;
        padding: 5px 8px;
    }
    button {
        padding: 3px 8px;
    }
}
```

### index.js
```
// bubble loop and random numbers of bubbles
function bubblemake() {
    var a = "";
    for (var i = 1; i <= 184; i++) {
        var b = Math.random() * 10
        var c = Math.floor(b)
        a += `<div class="bubble">${c}</div>`
    }
    document.getElementById("pbottom").innerHTML = a
}

//  timer---------------------------------------------------------------------------

var i = 60
function runtime() {
    var clear = setInterval(() => {
            if (i > 0) {
                i--
                document.getElementsByClassName('box1')[1].innerHTML = i
                    // document.getElementsByClassName('box1')[1].innerHTML.style.color = "red"
            } else {
                clearInterval(clear)
                document.getElementById('pbottom').innerHTML = "<h1>Game Over</h1>"
                setTimeout(() => {
                    document.getElementById("pbottom").innerHTML = `<h2>Your high score is <strong style="color:red;"> ${score}</strong></h2>`
                }, 1000);
                setTimeout(() => {
                    document.getElementById("pbottom").innerHTML = "<h3>Reload for restart the game</h3>"
                }, 3000)

                // document.getElementById("pbottom").innerHTML =

                // document.getElementById("pbottom").innerHTML = `Your final score is ${score}`
            }
        },
        1000);
}

// random hit number-------------------------------------------

var x
function randomhit() {
    x = Math.floor(Math.random() * 10)
    document.getElementsByClassName("box1")[0].innerHTML = x
        // console.log(x)

}

// bubble hit event-----------------------------------------------

function bubblehit() {
    var hit = document.getElementById('pbottom')
    hit.addEventListener("click", function(data) {
        var bubnum = Number(data.target.innerHTML)
        if (bubnum == x) {
            scorehit()
            randomhit()
            bubblemake()
        }
        // console.log(data.target.innerHTML)
        else {
            randomhit()
            bubblemake()
        }
    })
}
// score---------------------------------------------------------
var score = 0
function scorehit() {
    score += 10
    document.getElementsByClassName('box1')[2].innerHTML = score
}
// function call-------------------------------------------------
// runtime()
// bubblehit()
randomhit()
bubblemake()
function play() {
    runtime()
    bubblehit()
    randomhit()
    bubblemake()
}
```
### STEP 2: Run it on live server
