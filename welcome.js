function getDate() {
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
document.getElementById("times").innerHTML = h + ":" + m + ":" + s;
}