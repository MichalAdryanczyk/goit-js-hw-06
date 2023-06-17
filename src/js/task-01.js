"use strict"
const catCount = document.querySelectorAll(".item");
// const categoryCount = document.querySelectorAll("li.item");
console.log(`Number of categories: ${catCount.length}`);

catCount.forEach((element) => {
    const categoryName = element.querySelector("h2");
    const categoryEl = element.querySelectorAll("li");
    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements: ${categoryEl.length}`);   
});