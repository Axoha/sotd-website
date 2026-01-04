// this file doesn't actually do anything in the project, but you can run this code replacing the values of x1, y1, x2 and y2 with the pixel coordinates of the 4 points of a rectangle on the screen to find the percentage values for responsiveness
// example: the 4 points that make up the rectangle that surrounds the news button are 300px, 35px, 454px, 104px. Replace those values and you'll find the percentage values used in index.html as the positions for the news link
// if you struggle with this just hit me up
// easy but kinda janky way of obtaining the pixel coordinates without and image editor is by opening the image on your browser and running this in the terminal : document.addEventListener("mousemove", e => {console.log(e.offsetX, e.offsetY); });

function convertX(value) {
    return (value / 1270) * 100;
}

function convertY(value) {
    return (value / 715) * 100;
}
531,300,744,422
const x1 = 531;
const y1 = 300;
const x2 = 744;
const y2 = 422;

const left = convertX(x1);
const top = convertY(y1);
const width = convertX(x2 - x1);
const height = convertY(y2 - y1);

console.log(`left: ${left}%`);
console.log(`top: ${top}%`);
console.log(`width: ${width}%`);
console.log(`height: ${height}%`);