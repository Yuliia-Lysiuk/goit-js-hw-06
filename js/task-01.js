

const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);

for (const element of itemEl) {
    
    const titleEl = element.querySelector("h2");
    const partOfCategories = element.querySelector("ul");
    
    console.log(`
    Category: ${titleEl.textContent}
    Elements: ${partOfCategories.children.length}`);
    
}

