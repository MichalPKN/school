let form = document.getElementById("form");
let number = 0;
form.onsubmit = (e) => {
    e.preventDefault();
    let list = document.getElementById("list")
    let item = document.getElementById("item").value
    let li = document.createElement("LI")
    let form = document.getElementById("listLi")
    li.innerHTML = item
    list.insertBefore( li, list.childNodes[number])
    number++
};
