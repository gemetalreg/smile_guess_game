var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var width = 500;
var height = 500;
var picSize = 100;

var removeItem;

generateFaces();

var theBody = document.getElementsByTagName("body")[0];

theBody.onclick = function gameOver() {

    alert("Game Over!");

    theBody.onclick = null;

    theLeftSide.lastChild.onclick = null;

};

function generateFaces() {
    imgArray = [];

    removeIndex = Math.floor(Math.random() * numberOfFaces);

    for (var i = 0; i < numberOfFaces; i++) {
        var img = document.createElement("img");
        img.src = "smile.png";

        var top = Math.floor(Math.random() * (height - picSize + 1));
        var left = Math.floor(Math.random() * (width - picSize + 1));

        img.style.top = top + "px";
        img.style.left = left + "px";

        theLeftSide.appendChild(img);

        var noleftImg = img.cloneNode(true);

        imgArray.push(noleftImg);

        if (i == removeIndex) {
            theLeftSide.lastChild.onclick = function nextLevel(event) {
                event.stopPropagation();

                while (theLeftSide.firstChild) {
                    theLeftSide.removeChild(theLeftSide.firstChild);
                }

                while (theRightSide.firstChild) {
                    theRightSide.removeChild(theRightSide.firstChild);
                }

                numberOfFaces += 5;

                generateFaces();
            };
        }

    }

    removeItem = imgArray.splice(removeIndex, 1);

    for (var j = 0; j < numberOfFaces - 1; j++) {
        var rightImg = imgArray.shift();

        theRightSide.appendChild(rightImg);
    }

}

