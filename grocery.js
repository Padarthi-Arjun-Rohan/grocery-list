let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let lisCon = document.getElementById("groceryListContainer");
lisCon.classList = "bg";

let heading = document.createElement("h1");
heading.textContent = "Groery List";
lisCon.appendChild(heading);
heading.classList = "heading";

let lisSubCon = document.createElement("div");
lisCon.appendChild(lisSubCon);
lisSubCon.classList = "lis-sub-con";

let unLis = document.createElement("ul");
lisSubCon.appendChild(unLis);

for (let i of groceryList) {
    let lis = document.createElement("li");
    unLis.appendChild(lis);
    lis.textContent = i;
}

console.log(lisCon);