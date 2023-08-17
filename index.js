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

//  timer

var i = 60

function runtime() {
    var clear = setInterval(() => {
        if (i > 0) {
            i--
            document.getElementsByClassName('box1')[1].innerHTML = i
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
    }, 1000);

}

// random hit number-------------------------

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