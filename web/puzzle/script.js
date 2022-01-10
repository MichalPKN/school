let empty = Math.floor((Math.random() * 9) + 1);
console.log("p" + empty)
const emptyPiece = document.getElementById("p" + empty)
emptyPiece.classList.add("empty")

function clicked(id) {
    let area = [
        [],
        [],
        []
    ]
    let elements = document.getElementsByClassName("playground")[0].children;
    let order = 0
    let curr = []
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            area[j].push(elements[order].id)
            if (area[j][i] == id) {
                curr.push(j, i)
            }
            order++
        }
    }
    if (curr[0] - 1 >= 0 && document.getElementById(area[curr[0] - 1][curr[1]]).classList.contains("empty")) {
        console.log("up")
    }
    if (curr[0] + 1 <= 2 && document.getElementById(area[curr[0] + 1][curr[1]]).classList.contains("empty")) {
        console.log("down")
    }
    if (curr[1] - 1 >= 0 && document.getElementById(area[curr[0]][curr[1] - 1]).classList.contains("empty")) {
        console.log("left")
    }
    if (curr[1] + 1 <= 2 && document.getElementById(area[curr[0]][curr[1] + 1]).classList.contains("empty")) {
        console.log("right")
    }
    //console.log(area[curr[0 - 1]][curr[1]])
}

function swap(a, b) {

}