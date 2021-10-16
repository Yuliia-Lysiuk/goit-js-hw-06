

const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);


itemEl.forEach(element => {const titleEl = element.querySelector("h2");
    const partOfCategories = element.querySelector("ul");
    
    return console.log(`
    Category: ${titleEl.textContent}
    Elements: ${partOfCategories.children.length}`);})


