const items = document.querySelectorAll("#categories li.item")
console.log(`Number of categories: ${items.length}`)

items.forEach(item => console.log(`Category: ${item.firstElementChild.textContent} 
Elements: ${item.lastElementChild.children.length}`))


