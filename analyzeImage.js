
var img = document.body.children[0]
var canvas = document.createElement('canvas')
var context = canvas.getContext('2d')
canvas.width = img.width;
canvas.height = img.height;
context.drawImage(img, 0, 0 );

const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
const data = imgData.data;

// enumerate all pixels
// each pixel's r,g,b,a datum are stored in separate sequential array elements

var amountUntilZero = 0
var pennies = 0
var row = 0
var lastDiffrenceAmount = 4
var addYES = 0
var height = img.height
for(let i = 0; i < data.length; i += 4) {
    if (Math.round((i / height)) == (i / height)) {
        row = row +1
    }
    if (Math.round(row / lastDiffrenceAmount) == (row / lastDiffrenceAmount)) {
        console.log(lastDiffrenceAmount)
        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];
        const alpha = data[i + 3];
        var red2 = (100 - Math.round((Math.abs(173 - red) / 173)*100))
        var green2 = (100 - Math.round((Math.abs(111 - green) / 173)*100))
        var blue2 = (100 - Math.round((Math.abs(105 - blue) / 173)*100))
        if (amountUntilZero > 0 && red < 21 && green < 21 && blue < 21) {
            lastDiffrenceAmount = addYES
            addYES = 0
            amountUntilZero = 0
            pennies = pennies +1
        }
        if (red2 > 80 && green2 > 80 && blue2 > 80) {
          amountUntilZero = amountUntilZero +1
        } else {
            addYES = addYES +1
        }
    } else {
        amountUntilZero = 0
    }
}

console.log(pennies)