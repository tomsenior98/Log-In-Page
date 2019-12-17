class Deck {
    constructor(name, lovable, smartest, fattest, nerd, anarchist, fame) {
        this.name = name;
        this.lovable = lovable;
        this.smartest = smartest;
        this.fattest = fattest;
        this.nerd = nerd;
        this.anarchist = anarchist;
        this.fame = fame;
    }
}
const array = [
    new Deck("grampa", 68, 56, 66, 76, 78, 86),
    new Deck("apu", 78, 96, 78, 52, 88, 68),
    new Deck("barney", 86, 50, 96, 86, 74, 80),
    new Deck("bart", 90, 78, 50, 44, 98, 96),
    new Deck("burns", 48, 92, 40, 78, 90, 84),
    new Deck("wiggum", 76, 40, 98, 82, 46, 72),
    new Deck("julius", 58, 66, 88, 64, 64, 46),
    new Deck("edna", 48, 64, 56, 62, 60, 44),
    new Deck("groundskeeper", 62, 48, 70, 66, 80, 64),
    new Deck("homer", 92, 76, 94, 48, 94, 98),
    new Deck("itchy", 72, 52, 60, 56, 84, 76),
    new Deck("krusty", 70, 86, 92, 54, 86, 78),
    new Deck("lenny", 82, 60, 54, 94, 56, 54),
    new Deck("lisa", 98, 98, 48, 42, 96, 94),
    new Deck("maggie", 100, 54, 46, 74, 60, 92),
];

const player2 = [
    new Deck("marge", 94, 94, 68, 46, 62, 90),
    new Deck("martin", 80, 80, 90, 70, 72, 52),
    new Deck("milhouse", 78, 84, 74, 88, 68, 62),
    new Deck("moe", 76, 72, 44, 72, 82, 82),
    new Deck("ned", 52, 88, 84, 98, 42, 74),
    new Deck("nelson", 32, 20, 67, 89, 56, 39),
    new Deck("otto", 66, 58, 62, 84, 76, 60),
    new Deck("patty", 50, 90, 86, 50, 92, 88),
    new Deck("skinner", 74, 74, 64, 80, 48, 70),
    new Deck("santa", 96, 44, 42, 60, 50, 66),
    new Deck("sherri", 54, 82, 58, 76, 66, 58),
    new Deck("sideshow", 82, 62, 76, 90, 54, 40),
    new Deck("snowball", 88, 42, 52, 58, 52, 56),
    new Deck("waylon", 56, 40, 82, 92, 58, 42),
    new Deck("radioactive", 97, 85, 94, 50, 95, 98)

]
// Function for calling the image based on the split array
let choose = document.getElementById("call-card")
choose.addEventListener("click", function () {
    let image1 = document.getElementById('image1');
    let image2 = document.getElementById('image2');
    image1.src = `images/simpson/${array[0].name}.jpg`;
    image2.src = `images/simpson/${player2[0].name}.jpg`;

})

let compare = document.getElementById('value')
function compareCard() {
    compare.addEventListener('click', () => {
        if (array.loveable > player2.lovable) {
            array.push(player2)
            array.shift()
            let winner = array.shift()
            document.getElementById('player1 deckLength').innerHTML = array.length
            document.getElementById('player2 deckLength').innerHTML = player2.length
        }
        else {
            player2.push(array[0]);
            array.shift()
            let winner = player2.shift()
            player2.push(winner)
    }})}
    dcvsdv