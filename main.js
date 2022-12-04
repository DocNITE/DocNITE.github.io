//let test = document.getElementById("txt_1");
//let height = (test.clientHeight + 1) + "px";
//let width = (test.clientWidth + 1) + "px"
//console.log(height + " " + width);

// 10x19

//let app = document.getElementById("app");
//let test = document.getElementById("txt_0");
//let test2 = document.getElementById("txt_0").cloneNode(true);
//app.appendChild(test2);
//console.log(test2.textContent.length)
//test.textContent = test.textContent.length;

//let textArr = test.textContent.split("");
//let nEkem = document.createElement("span");
//let appElem = document.getElementById("txt_0");
//appElem.appendChild(nEkem)
//appElem.style.fontFamily = "DOS"
//nEkem.style.top = 19;

//let counts = "";
//textArr.forEach(function (char, i) {
    //add text character by character
//    counts += char;
  //  counts = i;
//});
//console.log(`${counts} ${counts.length}`);

const app = document.getElementById("app");
const scrTemp = document.getElementById("txt_-1");

let symbolSize = {width: 10, height: 19};
let scrSize = {width: 0, height: 0};

function drawClear() {
    for (let child of app.children) {
        child.parentNode.removeChild(child);
        child = null;
    } 
}

// Detect resize screen
function resize() {
    // Clear previous screen. Nahui ego
    drawClear();  

    scrSize.height = 0;
    for (let y = 0; (y*symbolSize.height + symbolSize.height) < (innerHeight-(innerHeight*0.06)); y++) {
        let nElem = document.getElementById("txt_-1").cloneNode(true);
        nElem.id = "txt_" + y;
        app.appendChild(nElem);

        scrSize.width = 0;
        for (let x = 0; (x*symbolSize.width + symbolSize.width) < (innerWidth-(innerWidth*0.12)); x++) {

            nElem.textContent += ".";
            scrSize.width++;
        }

        scrSize.height++;
    }
    console.log(`${scrSize.width} ${scrSize.height}`);

} // end resize()
//addEventListener("resize", resize) 
// TODO: Тут крч хуйня ебаная. 
// Html не удаляет некоторые элементы
// из-за чего он тупо дюпает их.
//
// Пока не придумаю фикс, будем
// перезагружать страницу, хуле

// Main process
function main() {

    // repeat
    requestAnimationFrame(main);
} // end main()

// Init screen and something
function init() {

    // Resize window
    resize();
} // end init()
addEventListener("load", init);